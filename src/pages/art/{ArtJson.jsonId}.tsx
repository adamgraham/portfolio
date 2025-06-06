import { graphql, type HeadProps } from 'gatsby';
import React from 'react';
import { Metadata, Page, Project } from '../../components';
import { baseUri } from '../../links';
import type { ProjectQueryData } from '../../types';

interface ArtProps {
  data: ProjectQueryData;
  location: Location;
}

export default function Art({ data, location }: ArtProps) {
  const { project } = data;
  return (
    <Page
      title="Interactive Art"
      dockLinks={project.buttons}
      location={location}
    >
      <Project project={project} />
    </Page>
  );
}

export const Head = ({ data }: HeadProps<ProjectQueryData>) => {
  return (
    <Metadata
      page={{
        url: `${baseUri}/${data.project.category}/${data.project.id}`,
        title: `Adam Graham • ${data.project.title}`,
        description: data.project.description_short || data.project.description,
        image: data.project.image && data.project.image.sharp.original.src,
      }}
    />
  );
};

export const query = graphql`
  query ($id: String!) {
    project: artJson(id: { eq: $id }) {
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
        href
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
