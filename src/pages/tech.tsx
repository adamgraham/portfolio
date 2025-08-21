import { graphql, type PageProps, type HeadFC } from 'gatsby';
import React from 'react';
import { Gallery, Metadata, Page } from '../components';
import { baseUri } from '../links';
import type { SlidesQueryData } from '../types';

export default function Tech({ data, location }: PageProps<SlidesQueryData>) {
  return (
    <Page id="tech" title="Tech Showcases" location={location}>
      <Gallery category="tech" location={location} slides={data.json.slides} />
    </Page>
  );
}

export const Head: HeadFC = () => {
  return (
    <Metadata
      page={{
        url: `${baseUri}/tech`,
        title: 'Adam Graham • Tech Showcases',
      }}
    />
  );
};

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
      }
    }
  }
`;
