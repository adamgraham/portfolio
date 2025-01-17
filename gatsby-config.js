module.exports = {
  siteMetadata: {
    title: 'Adam Graham',
    siteUrl: 'https://adamgraham.github.io',
    description:
      'Adam is a software engineer and game developer inspired by the blending of art, design, and engineering to create best in class user experiences.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adam Graham',
        short_name: 'Adam Graham',
        start_url: '/',
        display: 'standalone',
        theme_color: '#282e34',
        background_color: '#ffffff',
        icon: 'static/logo512.png',
      },
    },
    'gatsby-plugin-use-query-params',
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
