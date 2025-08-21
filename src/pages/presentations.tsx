import { graphql, type PageProps, type HeadFC } from 'gatsby';
import React from 'react';
import { Gallery, Metadata, Page } from '../components';
import { baseUri } from '../links';
import type { SlidesQueryData } from '../types';

export default function Presentations({
  data,
  location,
}: PageProps<SlidesQueryData>) {
  return (
    <Page id="presentations" title="Presentations" location={location}>
      <Gallery
        category="presentations"
        location={location}
        slides={data.json.slides}
      />
    </Page>
  );
}

export const Head: HeadFC = () => {
  return (
    <Metadata
      page={{
        url: `${baseUri}/presentations`,
        title: 'Adam Graham • Presentations',
      }}
    />
  );
};

export const query = graphql`
  query Presentations {
    json: allPresentationsJson {
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
      }
    }
  }
`;
