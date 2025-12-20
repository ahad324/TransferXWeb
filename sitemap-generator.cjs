const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('node:fs');
const path = require('node:path');

async function generateSitemap() {
  try {
    const sitemapStream = new SitemapStream({
      hostname: 'https://transferx.netlify.app',
    });

    const currentDate = new Date().toISOString().split('T');

    sitemapStream.write({ url: '/', changefreq: 'weekly', priority: 1, lastmod: currentDate });
    sitemapStream.write({ url: '/download', changefreq: 'monthly', priority: 0.9, lastmod: currentDate });
    sitemapStream.write({ url: '/how-transferx-works', changefreq: 'weekly', lastmod: currentDate });
    sitemapStream.write({ url: '/solutions', changefreq: 'weekly', lastmod: currentDate });
    sitemapStream.write({ url: '/about', changefreq: 'weekly', lastmod: currentDate });
    sitemapStream.write({ url: '/contact', changefreq: 'weekly', lastmod: currentDate });
    sitemapStream.write({ url: '/privacy-policy', changefreq: 'yearly', lastmod: currentDate });
    sitemapStream.write({ url: '/docs/installer-error-codes', changefreq: 'yearly', lastmod: currentDate });
    sitemapStream.end();

    const sitemapData = await streamToPromise(sitemapStream);
    const formattedSitemap = formatSitemap(sitemapData.toString());
    const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
    fs.writeFileSync(sitemapPath, formattedSitemap);
    console.log('Sitemap generated successfully!');

  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

function formatSitemap(xml) {
  const formatted = xml
    .replace(/></g, '>\n<')
    .replace(/<url>/g, '\n<url>')
    .replace(/<\/url>/g, '</url>\n')
    .trim();
  return formatted;
}

generateSitemap();