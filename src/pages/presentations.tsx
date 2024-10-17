import { graphql } from 'gatsby';
import React from 'react';
import { Gallery, Page } from '../components';
import { baseUri } from '../links';
import type { SlideData } from '../types';

interface PresentationsProps {
  data: {
    json: {
      slides: SlideData[];
    };
  };
  location: Location;
}

export default function Presentations({ data, location }: PresentationsProps) {
  return (
    <Page
      id="presentations"
      title="Presentations"
      location={location}
      metadata={{
        url: `${baseUri}/presentations`,
        title: 'Adam Graham • Presentations',
      }}
    >
      <Gallery
        category="presentations"
        location={location}
        slides={data.json.slides}
      />
    </Page>
  );
}

export const query = graphql`
  query Presentations {
    json: allPresentationsJson {
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
