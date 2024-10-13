import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Helmet } from 'react-helmet';

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

const Metadata = (props) => {
  const queryData = useStaticQuery(query);
  const { metadata: siteMetadata } = queryData.site;
  const metadata = { ...siteMetadata, ...props };
  return (
    <Helmet>
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
    </Helmet>
  );
};

Metadata.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Metadata;
