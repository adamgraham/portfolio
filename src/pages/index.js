import { Button, Link } from '@zigurous/react-components';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

const Home = () => {
  return (
    <main className="cover" data-theme="dark">
      <article className="container-md">
        <b className="h5 padding-left-sm">Hello, my name is</b>
        <h1 className="margin-top-sm">Adam Graham</h1>
        <p className="font-lg margin-bottom-1em">
          Adam is a professional software engineer and game developer with 10+
          years of experience. He founded the indie game studio{' '}
          <Link external to="https://zigurous.com/">
            <b>Zigurous</b>
          </Link>{' '}
          in 2021 and is currently working on his first major release alongside
          other enterprise projects. Adam's work is inspired by a passion for
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
