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
      buttons: [Link]
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
      buttons: [Link]
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
      buttons: [Link]
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
      buttons: [Link]
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
      customLink: Link
      buttons: [Link]
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
    type Link {
      id: String
      name: String!
      href: String!
      icon: String
      iconAlignment: String
      color: String
      external: Boolean
    }
  `;
  createTypes(typeDefs);
};
