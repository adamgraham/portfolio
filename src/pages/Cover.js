import { Button, SocialNavLinks } from '@zigurous/react-components';
import React from 'react';
import socials from '../socials';
import './Cover.css';

const Cover = () => (
  <article className="cover">
    <section className="wrapper margin-bottom-4em">
      <div className="content">
        <b className="padding-left-sm">Hello, my name is</b>
        <div className="h2">Adam Graham</div>
        <p>
          I am a game developer and UX Engineer based in Chicago, IL fueled by a
          passion for art and design. As the founder of Zigurous, I make games
          with a focus on self-expression, creative thinking, and
          cooperative-play.
        </p>
        <div className="display-flex align-items-center">
          <Button size="small">View Gallery</Button>
          <SocialNavLinks
            className="margin-left-md"
            iconSize={24}
            iconInnerPadding={12}
            links={Object.values(socials)}
          />
        </div>
      </div>
    </section>
  </article>
);

export default Cover;
