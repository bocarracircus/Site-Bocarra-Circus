module.exports = {
  siteUrl : 'https://bocarracircus.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://bocarracircus.com/server-sitemap-index.xml',
    ],
  },
}