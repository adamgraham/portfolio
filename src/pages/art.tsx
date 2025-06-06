import { graphql, type HeadFC } from 'gatsby';
import React from 'react';
import { Gallery, Metadata, Page } from '../components';
import { baseUri } from '../links';
import type { SlideData } from '../types';

interface ArtProps {
  data: {
    json: {
      slides: SlideData[];
    };
  };
  location: Location;
}

export default function Art({ data, location }: ArtProps) {
  return (
    <Page id="art" title="Interactive Art" location={location}>
      <Gallery category="art" location={location} slides={data.json.slides} />
    </Page>
  );
}

export const Head: HeadFC = () => {
  return (
    <Metadata
      page={{
        url: `${baseUri}/art`,
        title: 'Adam Graham • Interactive Art',
      }}
    />
  );
};

export const query = graphql`
  query Art {
    json: allArtJson {
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
