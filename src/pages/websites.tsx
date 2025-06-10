import { graphql, type HeadFC } from 'gatsby';
import React from 'react';
import { Gallery, Metadata, Page } from '../components';
import { baseUri } from '../links';
import type { SlideData } from '../types';

interface WebsitesProps {
  data: {
    json: {
      slides: SlideData[];
    };
  };
  location: Location;
}

export default function Websites({ data, location }: WebsitesProps) {
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
