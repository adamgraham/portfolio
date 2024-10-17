import { graphql } from 'gatsby';
import React from 'react';
import { Gallery, Page } from '../components';
import { baseUri } from '../links';
import type { SlideData } from '../types';

interface TechProps {
  data: {
    json: {
      slides: SlideData[];
    };
  };
  location: Location;
}

export default function Tech({ data, location }: TechProps) {
  return (
    <Page
      id="tech"
      title="Tech Showcases"
      location={location}
      metadata={{
        url: `${baseUri}/tech`,
        title: 'Adam Graham • Tech Showcases',
      }}
    >
      <Gallery category="tech" location={location} slides={data.json.slides} />
    </Page>
  );
}

export const query = graphql`
  query Tech {
    json: allTechJson {
      slides: nodes {
        id: jsonId
        category
        date
        title
        description
        description_short
        image {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        imageAltText
        imageBorder
      }
    }
  }
`;
