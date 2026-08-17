import { Link, Stack, Text } from '@zigurous/forge-react';
import classNames from 'classnames';
import { Link as GatsbyLink, type HeadFC } from 'gatsby';
import React from 'react';
import Grid3D from '../components/Grid3D';
import Metadata from '../components/Metadata';
import Page from '../components/Page';
import ShadowButton from '../components/ShadowButton';
import Vignette from '../components/Vignette';
import { use3dHoverEffect } from '../hooks/use3dHoverEffect';
import { useElementScale } from '../hooks/useElementScale';
import { baseUri } from '../links';

interface HomeProps {
  location: Location;
}

export default function Home({ location }: HomeProps) {
  // const cardRef = use3dHoverEffect();
  const [scale, contentRef] = useElementScale();
  return (
    <Page id="cover" hideDock hideHeader location={location}>
      <Grid3D />
      <Vignette />
      <div className="cover card-3d">
        <div
          className={classNames(
            'introduction container-md flex flex-col align-center text-center p-0',
            { invisible: scale === undefined },
          )}
          ref={contentRef}
          style={{ transform: `scale(${scale || 1})` }}
        >
          <Text color="default" marginBottom="xxs" type="subtitle">
            Hello! 👋 My name is
          </Text>
          <Text as="h1" marginBottom="md" type="display">
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
            of art, design, and engineering to create memorable user
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
