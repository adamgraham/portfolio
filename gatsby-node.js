const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
      },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ArtJson implements Node {
      id: String!
      category: String!
      title: String!
      description: String
      description_short: String
      description_long: [String]
      date: String
      role: String
      tech: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: Boolean
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
    type GamesJson implements Node {
      id: String!
      category: String!
      title: String!
      description: String
      description_short: String
      description_long: [String]
      date: String
      role: String
      tech: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: Boolean
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
    type PresentationsJson implements Node {
      id: String!
      category: String!
      title: String!
      description: String
      description_short: String
      description_long: [String]
      date: String
      role: String
      tech: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: Boolean
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
    type TechJson implements Node {
      id: String!
      category: String!
      title: String!
      description: String
      description_short: String
      description_long: [String]
      date: String
      role: String
      tech: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: Boolean
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
    type WebsitesJson implements Node {
      id: String!
      category: String!
      title: String!
      description: String
      description_short: String
      description_long: [String]
      date: String
      role: String
      tech: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: Boolean
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
    type ProjectsJson implements Node {
      title: String!
      projects: [ProjectsItem]
    }
    type ProjectsItem {
      title: String
      description: String
      date: String
      link: String
      externalLink: String
      tags: [String]
    }
    type ProjectButton {
      to: String!
      name: String!
      icon: String
    }
    type ProjectSection {
      title: String
      link: String
      mainImage: File @fileByRelativePath
      mainImageLink: String
      mainVideo: String
      paragraphs: [String]
      gallery: [File] @fileByRelativePath
      videos: [String]
    }
  `;
  createTypes(typeDefs);
};
