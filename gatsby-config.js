module.exports = {
  siteMetadata: {
    siteTitle: `Powder Lab`,
    siteTitleAlt: `Powder Lab`,
    siteHeadline: `Powder Lab`,
    siteUrl: `https://powderlabs.dev`,
    siteDescription: `We code. Hire us`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: ``,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Powder Labs`,
        short_name: `Powder Labs`,
        description: `We code. Hire us.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          }
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
