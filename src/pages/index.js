import { ButtonGroup, Link } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import React, { useRef } from 'react';
import { Page, ShadowButton } from '../components';
import { useElementSize } from '../hooks/useElementSize';
import { baseUri } from '../links';

const Home = ({ location }) => {
  const ref = useRef();
  const [_, scale] = useElementSize(ref);
  return (
    <Page
      id="cover"
      hideDock
      hideHeader
      location={location}
      metadata={{
        url: baseUri,
        title: 'Adam Graham • Portfolio',
      }}
    >
      <div className="cover">
        <div
          className="container-md introduction"
          ref={ref}
          style={{ transform: `scale(${scale})` }}
        >
          <b className="h6 padding-left-sm">Hello! 👋 My name is</b>
          <h1 className="margin-bottom-md" style={{ fontWeight: 700 }}>
            Adam Graham
          </h1>
          <p className="font-sm margin-bottom-md opacity-90p">
            I'm a software engineer and game developer inspired by the blending
            of art, design, and engineering to create best in class user
            experiences. I love working on design centric projects across web
            and mobile having been a tech lead and UX engineer for many Fortune
            500 clients over the past 10 years.
          </p>
          <ButtonGroup>
            <Link
              ElementType={GatsbyLink}
              to="/games"
              style={{ marginLeft: '-4px' }}
              unstyled
            >
              <ShadowButton>Gallery</ShadowButton>
            </Link>
            <Link
              ElementType={GatsbyLink}
              to="/projects"
              style={{ marginLeft: '-4px' }}
              unstyled
            >
              <ShadowButton>Projects</ShadowButton>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </Page>
  );
};

export default Home;
