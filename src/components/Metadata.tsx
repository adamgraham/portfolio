import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export interface MetadataProps {
  page?: {
    description?: string;
    image?: string;
    title?: string;
    url?: string;
  };
}

export default function Metadata({ page }: MetadataProps) {
  const queryData = useStaticQuery<MetadataQueryData>(query);
  const metadata = { ...queryData.site.metadata, ...page };
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {metadata.image && <meta name="image" content={metadata.image} />}

      {metadata.url && <meta property="og:url" content={metadata.url} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      {metadata.image && <meta property="og:image" content={metadata.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@zigurous" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      {metadata.image && <meta name="twitter:image" content={metadata.image} />}
    </>
  );
}

interface MetadataQueryData {
  site: {
    metadata: {
      title: string;
      description: string;
    };
  };
}

const query = graphql`
  query Metadata {
    site {
      metadata: siteMetadata {
        title
        description
      }
    }
  }
`;
