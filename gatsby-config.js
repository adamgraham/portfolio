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
        theme_color: '#171d26',
        background_color: '#ffffff',
        icon: 'static/favicon.svg',
      },
    },
    'gatsby-plugin-sitemap',
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
