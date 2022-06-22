module.exports = {
  siteMetadata: {
    title: 'Adam Graham',
    siteUrl: 'https://adamgraham.io',
    description:
      'Adam Graham is a game developer and software engineer based in Chicago, IL fueled by a passion for art and design.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-61761892-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adam Graham',
        short_name: 'Adam Graham',
        start_url: '/',
        display: 'standalone',
        theme_color: '#101214',
        background_color: '#101214',
        icon: 'static/logo512.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-portal',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
  trailingSlash: 'never',
};
