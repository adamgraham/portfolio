import { graphql, type PageProps, type HeadFC } from 'gatsby';
import React from 'react';
import Gallery from '../components/Gallery';
import Metadata from '../components/Metadata';
import Page from '../components/Page';
import { baseUri } from '../links';
import type { SlidesQueryData } from '../types/slide';

export default function Games({ data, location }: PageProps<SlidesQueryData>) {
  return (
    <Page id="games" title="Games" location={location}>
      <Gallery category="games" location={location} slides={data.json.slides} />
    </Page>
  );
}

export const Head: HeadFC = () => {
  return (
    <Metadata
      page={{
        url: `${baseUri}/games`,
        title: 'Adam Graham • Games',
      }}
    />
  );
};

export const query = graphql`
  query Games {
    json: allGamesJson {
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
