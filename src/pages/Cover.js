import { Button, SocialNavLinks, useMounted } from '@zigurous/react-components';
import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import socials from '../socials';
import '../styles/cover.css';

const Cover = () => {
  const history = useHistory();
  const mounted = useMounted();
  return (
    <article className={classNames('cover', { loaded: mounted })}>
      <section className="wrapper margin-bottom-4em">
        <div className="content">
          <b className="padding-left-sm">Hello, my name is</b>
          <div className="h2">Adam Graham</div>
          <p>
            I am a game developer and UX Engineer based in Chicago, IL fueled by
            a passion for art and design. As the founder of Zigurous, I make
            games with a focus on self-expression, creative thinking, and
            cooperative-play.
          </p>
          <div className="display-flex align-items-center">
            <Button history={history} link="/games" size="small">
              View Gallery
            </Button>
            <SocialNavLinks
              className="margin-left-lg"
              iconSize={24}
              iconInnerPadding={12}
              links={Object.values(socials)}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Cover;
