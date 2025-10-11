import { graphql, type PageProps, type HeadFC } from 'gatsby';
import React from 'react';
import Gallery from '../components/Gallery';
import Metadata from '../components/Metadata';
import Page from '../components/Page';
import { baseUri } from '../links';
import type { SlidesQueryData } from '../types/slide';

export default function Websites({
  data,
  location,
}: PageProps<SlidesQueryData>) {
  return (
    <Page id="websites" title="Websites" location={location}>
      <Gallery
        category="websites"
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
        url: `${baseUri}/websites`,
        title: 'Adam Graham • Websites',
      }}
    />
  );
};

export const query = graphql`
  query Websites {
    json: allWebsitesJson {
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
        customLink {
          name
          href
          icon
        }
      }
    }
  }
`;
