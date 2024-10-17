import { graphql } from 'gatsby';
import React from 'react';
import { Page, Project } from '../../components';
import { baseUri } from '../../links';
import type { ProjectData } from '../../types';

interface TechProps {
  data: {
    project: ProjectData;
  };
  location: Location;
}

export default function Tech({ data, location }: TechProps) {
  const { project } = data;
  return (
    <Page
      title="Tech Showcases"
      dockLinks={project.buttons}
      location={location}
      metadata={{
        url: `${baseUri}/${project.category}/${project.id}`,
        title: `Adam Graham • ${project.title}`,
        description: project.description_short || project.description,
        image: project.image && project.image.sharp.original.src,
      }}
    >
      <Project project={project} />
    </Page>
  );
}

export const query = graphql`
  query ($id: String!) {
    project: techJson(id: { eq: $id }) {
      id: jsonId
      category
      title
      description
      description_short
      description_long
      date
      role
      tech
      image {
        sharp: childImageSharp {
          original {
            src
            width
            height
          }
        }
      }
      buttons {
        to
        name
        icon
      }
      sections {
        title
        link
        mainImage {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        mainImageLink
        mainVideo
        paragraphs
        gallery {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        videos
      }
    }
  }
`;
