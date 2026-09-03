import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const noticesJsonPath = path.join(rootDir, 'src/data/notices.json');
const publicNoticesJsonPath = path.join(rootDir, 'public/notices.json');
const indexHtmlPath = path.join(rootDir, 'index.html');

export function syncNoticesToHtmlAndFiles(notices) {
  if (!Array.isArray(notices)) {
    console.error('syncNotices: notices must be an array');
    return false;
  }

  // 1. Write src/data/notices.json
  const noticesJsonStr = JSON.stringify(notices, null, 2);
  fs.writeFileSync(noticesJsonPath, noticesJsonStr, 'utf-8');

  // 2. Write public/notices.json
  fs.writeFileSync(publicNoticesJsonPath, noticesJsonStr, 'utf-8');

  // 3. Update index.html
  if (fs.existsSync(indexHtmlPath)) {
    let html = fs.readFileSync(indexHtmlPath, 'utf-8');

    // Update <script id="initial-notices">
    const scriptRegex = /<script\s+id=["']initial-notices["']\s+type=["']application\/json["']>([\s\S]*?)<\/script>/;
    if (scriptRegex.test(html)) {
      html = html.replace(scriptRegex, `<script id="initial-notices" type="application/json">\n${noticesJsonStr}\n    </script>`);
    }

    // Update Schema.org ItemList in <script type="application/ld+json">
    const jsonLdItems = notices.map((n, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "NewsArticle",
        "headline": n.title,
        "description": n.content ? n.content.slice(0, 150).replace(/\n/g, ' ') : '',
        "articleSection": n.category || '양성화안내',
        "datePublished": n.createdAt ? (typeof n.createdAt === 'string' ? n.createdAt.split('T')[0] : new Date(n.createdAt).toISOString().split('T')[0]) : '2026-07-15',
        "author": {
          "@type": "Person",
          "name": "김용호 대표 건축사"
        }
      }
    }));

    const ldJsonRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/;
    if (ldJsonRegex.test(html)) {
      try {
        const fullLdJson = {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "name": "로하스건축사사무소",
              "description": "위반건축물 양성화, 불법건축물 양성화, 특정건축물 정리 특별조치법 전문 건축사사무소",
              "telephone": "02-499-0229",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "서울시 송파구 송이로14길 8, 301호",
                "addressLocality": "서울시 송파구",
                "addressCountry": "KR"
              }
            },
            {
              "@type": "ItemList",
              "name": "로하스건축사사무소 공지사항 및 양성화 안내",
              "itemListElement": jsonLdItems
            }
          ]
        };
        html = html.replace(ldJsonRegex, `<script type="application/ld+json">\n${JSON.stringify(fullLdJson, null, 2)}\n    </script>`);
      } catch (e) {
        console.warn('Could not update ld+json:', e);
      }
    }

    // Update <noscript> articles
    const noscriptRegex = /<section>\s*<h2>공지사항 및 양성화 안내<\/h2>[\s\S]*?<\/section>/;
    const noscriptArticles = notices.map(n => `            <article>
              <h3>[${n.category || '양성화안내'}] ${n.title}</h3>
              <p>작성일: ${n.createdAt ? (typeof n.createdAt === 'string' ? n.createdAt.split('T')[0] : new Date(n.createdAt).toISOString().split('T')[0]) : ''} | 카테고리: ${n.category || '양성화안내'}</p>
              <p>${n.content ? n.content.slice(0, 200).replace(/\n/g, ' ') : ''}...</p>
            </article>`).join('\n');

    if (noscriptRegex.test(html)) {
      html = html.replace(noscriptRegex, `<section>\n            <h2>공지사항 및 양성화 안내</h2>\n${noscriptArticles}\n          </section>`);
    }

    fs.writeFileSync(indexHtmlPath, html, 'utf-8');
  }

  return true;
}

// If run directly from CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    if (fs.existsSync(noticesJsonPath)) {
      const data = JSON.parse(fs.readFileSync(noticesJsonPath, 'utf-8'));
      syncNoticesToHtmlAndFiles(data);
      console.log(`[sync-html-notices] Successfully synced ${data.length} notices to index.html and public/notices.json`);
    }
  } catch (err) {
    console.error('[sync-html-notices] Error syncing notices:', err);
    process.exit(1);
  }
}
