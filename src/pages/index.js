import { Button, Link, SocialNavLinks } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import socialLinks from '../socialLinks';

const Home = () => {
  return (
    <main className="cover">
      <article className="container-sm">
        <b className="padding-left-sm">Hello, my name is</b>
        <h1 className="h2">Adam Graham</h1>
        <p>
          I am a game developer and UX Engineer based in Chicago, IL fueled by a
          passion for art and design. I founded an indie game studio called{' '}
          <Link external to="https://zigurous.com/">
            <b>Zigurous</b>
          </Link>{' '}
          where I make games, assets, and tutorials for the community.
        </p>
        <div className="display-flex align-items-center flex-wrap">
          <GatsbyLink className="link--undecorated" to="/games">
            <Button
              className="margin-right-lg margin-top-lg margin-bottom-lg"
              size="small"
            >
              View Gallery
            </Button>
          </GatsbyLink>
          <SocialNavLinks
            foregroundColor="black"
            iconSize={24}
            iconInnerPadding={12}
            links={Object.values(socialLinks)}
          />
        </div>
      </article>
    </main>
  );
};

export default Home;
