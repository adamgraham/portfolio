import { graphql, type HeadFC } from 'gatsby';
import React from 'react';
import { Gallery, Metadata, Page } from '../components';
import { baseUri } from '../links';
import type { SlideData } from '../types';

interface TutorialsProps {
  data: {
    json: {
      slides: SlideData[];
    };
  };
  location: Location;
}

export default function Tutorials({ data, location }: TutorialsProps) {
  return (
    <Page id="tutorials" title="Tutorials" location={location}>
      <Gallery
        category="tutorials"
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
        url: `${baseUri}/tutorials`,
        title: 'Adam Graham • Tutorials',
      }}
    />
  );
};

export const query = graphql`
  query Tutorials {
    json: allTutorialsJson {
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
          iconAlignment
        }
      }
    }
  }
`;
