import { Button, Link } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

const Home = () => {
  return (
    <main className="cover" data-theme="dark">
      <article className="container-md">
        <b className="h5 padding-left-sm">Hello, my name is</b>
        <h1 className="margin-top-sm">Adam Graham</h1>
        <p className="text-foreground-secondary font-lg margin-bottom-1em">
          Adam is a professional software engineer with over 10 years experience
          in the industry. He founded the indie game development studio{' '}
          <Link external to="https://zigurous.com/">
            <b>Zigurous</b>
          </Link>{' '}
          in 2021 and is currently focused on creating Unity assets and
          tutorials for other developers. His work is inspired by a passion for
          art, design, and engineering.
        </p>
        <Link ElementType={GatsbyLink} to="/games" unstyled>
          <Button size={Button.size.medium}>View Gallery</Button>
        </Link>
      </article>
    </main>
  );
};

export default Home;
