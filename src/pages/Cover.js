import { Button, fadeIn, SocialNavLinks } from '@zigurous/react-components';
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import socials from '../socials';
import '../styles/cover.css';

const Cover = ({ className }) => {
  const history = useHistory();
  return (
    <article className={classNames('cover', className)}>
      <section className="wrapper margin-bottom-4em">
        <div className="content">
          <b className="padding-left-sm">Hello, my name is</b>
          <h1 className="h2">Adam Graham</h1>
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

Cover.propTypes = {
  className: PropTypes.string,
};

export default fadeIn(Cover);
