const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('node:fs');
const path = require('node:path');

async function generateSitemap() {
  try {
    const sitemapStream = new SitemapStream({
      hostname: 'https://transferx.netlify.app',
    });

    const currentDate = new Date().toISOString().split('T')[0];

    sitemapStream.write({ url: '/', changefreq: 'weekly', priority: 1, lastmod: currentDate });
    sitemapStream.write({ url: '/tutorial/client', changefreq: 'weekly', lastmod: currentDate });
    // sitemapStream.write({ url: '/tutorial/server', changefreq: 'weekly' });


    sitemapStream.end();

    const sitemapData = await streamToPromise(sitemapStream);
    const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapData.toString());
    console.log('Sitemap generated successfully!');

  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}


generateSitemap();