import { Link } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

const Home = () => {
  return (
    <main className="cover">
      <article className="container-md">
        <b className="h5 padding-left-sm">Hello, my name is</b>
        <h1 className="margin-top-sm">Adam Graham</h1>
        <p className="text-foreground-secondary font-lg margin-bottom-1em">
          I am a game developer and software engineer based in Chicago, IL
          fueled by a passion for art and design. I founded an indie game studio
          called{' '}
          <Link className="color-inherit" external to="https://zigurous.com/">
            <b>Zigurous</b>
          </Link>{' '}
          where I make game assets and tutorials to help developers grow their
          skills and make games easier.
        </p>
        <Link
          className="btn btn--solid"
          ElementType={GatsbyLink}
          to="/games"
          unstyled
        >
          View Gallery
        </Link>
      </article>
    </main>
  );
};

export default Home;