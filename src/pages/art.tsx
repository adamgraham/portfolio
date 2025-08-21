import { graphql, type PageProps, type HeadFC } from 'gatsby';
import React from 'react';
import { Gallery, Metadata, Page } from '../components';
import { baseUri } from '../links';
import type { SlidesQueryData } from '../types';

export default function Art({ data, location }: PageProps<SlidesQueryData>) {
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
        title
        description
        description_short
        date
        image {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        imageBorder
      }
    }
  }
`;
