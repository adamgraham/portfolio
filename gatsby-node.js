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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ProjectDetail implements Node {
      key: String!
      value: String!
    }
    type ProjectButton implements Node {
      name: String!
      link: String!
      icon: String
    }
    type ProjectSection implements Node {
      title: String
      link: String
      mainImage: File @fileByRelativePath
      mainVideo: String
      paragraphs: [String]
      gallery: [File] @fileByRelativePath
      videos: [String]
    }
    type ArtJson implements Node {
      id: String!
      category: String!
      title: String!
      date: String
      description: String
      description_short: String
      description_long: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: String
      details: [ProjectDetail]
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
    type GamesJson implements Node {
      id: String!
      category: String!
      title: String!
      date: String
      description: String
      description_short: String
      description_long: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: String
      details: [ProjectDetail]
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
    type PresentationsJson implements Node {
      id: String!
      category: String!
      title: String!
      date: String
      description: String
      description_short: String
      description_long: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: String
      details: [ProjectDetail]
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
    type TechJson implements Node {
      id: String!
      category: String!
      title: String!
      date: String
      description: String
      description_short: String
      description_long: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: String
      details: [ProjectDetail]
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
    type WebsitesJson implements Node {
      id: String!
      category: String!
      title: String!
      date: String
      description: String
      description_short: String
      description_long: [String]
      image: File! @fileByRelativePath
      imageAltText: String
      imageBorder: String
      details: [ProjectDetail]
      buttons: [ProjectButton]
      sections: [ProjectSection]
    }
  `;
  createTypes(typeDefs);
};
