import { Link, Stack, Text } from '@zigurous/forge-react';
import { Link as GatsbyLink, type HeadFC } from 'gatsby';
import React, { useRef } from 'react';
import { Grid3D, Metadata, Page, ShadowButton, Vignette } from '../components';
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
    <Page id="cover" hideDock hideHeader location={location}>
      <Grid3D />
      <Vignette />
      <div className="cover card-3d" ref={cardRef}>
        <div
          className="introduction container-md flex flex-col align-center text-center p-0"
          ref={ref}
          style={{ transform: `scale(${scale})` }}
        >
          <Text color="default" marginBottom="xxs" type="subtitle">
            Hello! 👋 My name is
          </Text>
          <Text as="h1" marginBottom="md" type="display" weight="800">
            Adam Graham
          </Text>
          <Text
            className="text-pretty w-8/10"
            color="muted"
            marginBottom="lg"
            size="sm"
            weight="500"
          >
            I'm a software engineer and game developer inspired by the blending
            of art, design, and engineering to create best in class user
            experiences.
          </Text>
          <Stack align="center" justify="center" spacing="lg">
            <Link as={GatsbyLink} to="/gallery" unstyled>
              <ShadowButton>Portfolio</ShadowButton>
            </Link>
            <Link as={GatsbyLink} to="/resume" unstyled>
              <ShadowButton>Resume</ShadowButton>
            </Link>
          </Stack>
        </div>
      </div>
    </Page>
  );
}

export const Head: HeadFC = () => {
  return (
    <Metadata
      page={{
        url: baseUri,
        title: 'Adam Graham • Portfolio',
      }}
    />
  );
};
