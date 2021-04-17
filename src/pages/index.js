import { Button, Link /*, SocialNavLinks */ } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
// import { socialLinks } from '../links';

const Home = () => {
  return (
    <main className="cover">
      <article className="container-md">
        <b className="h5 padding-left-sm">Hello, my name is</b>
        <h1 className="margin-top-sm">Adam Graham</h1>
        <p className="font-lg">
          I am a game developer and UX Engineer based in Chicago, IL fueled by a
          passion for art and design. I founded an indie game studio called{' '}
          <Link className="color-inherit" external to="https://zigurous.com/">
            <b>Zigurous</b>
          </Link>{' '}
          where I make game assets and tutorials to help developers grow their
          skills and make games easier.
        </p>
        <div className="display-flex align-items-center flex-wrap">
          <GatsbyLink className="link--unstyled" to="/games">
            <Button className="margin-top-lg margin-bottom-lg" size="medium">
              View Gallery
            </Button>
          </GatsbyLink>
          {/* <SocialNavLinks
            foregroundColor="black"
            iconSize={24}
            iconInnerPadding={12}
            links={socialLinks}
          /> */}
        </div>
      </article>
    </main>
  );
};

export default Home;
