import { ButtonGroup, Link } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import React, { useRef } from 'react';
import { Grid3D, Page, ShadowButton, Vignette } from '../components';
import { useElementScale, use3dHoverEffect } from '../hooks';
import { baseUri } from '../links';

interface HomeProps {
  location: Location;
}

export default function Home({ location }: HomeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useElementScale(ref);
  use3dHoverEffect(cardRef);
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
      <Grid3D />
      <Vignette />
      <div className="cover card-3d" ref={cardRef}>
        <div
          className="container-md introduction display-flex flex-column align-items-center text-center"
          ref={ref}
          style={{ transform: `scale(${scale})` }}
        >
          <p className="h5" style={{ marginBottom: 4 }}>
            Hello! 👋 My name is
          </p>
          <h1
            className="display-5 font-weight-700"
            style={{ marginBottom: 12 }}
          >
            Adam Graham
          </h1>
          <p className="font-sm color-foreground-muted width-80p">
            I'm a software engineer and game developer inspired by the blending
            of art, design, and engineering to create best in class user
            experiences.
          </p>
          <ButtonGroup className="justify-content-center">
            <Link as={GatsbyLink} to="/gallery" unstyled>
              <ShadowButton>Gallery</ShadowButton>
            </Link>
            <Link as={GatsbyLink} to="/projects" unstyled>
              <ShadowButton>Projects</ShadowButton>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </Page>
  );
}
