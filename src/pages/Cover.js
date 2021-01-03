import {
  Button,
  fadeIn,
  Link,
  SocialNavLinks,
} from '@zigurous/react-components';
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import socialLinks from '../socialLinks';

const Cover = ({ className }) => {
  const history = useHistory();
  return (
    <div className={classNames('cover', className)}>
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
          <Button
            className="margin-right-lg margin-top-lg margin-bottom-lg"
            history={history}
            link="/games"
            size="small"
          >
            View Gallery
          </Button>
          <SocialNavLinks
            foregroundColor="black"
            iconSize={24}
            iconInnerPadding={12}
            links={Object.values(socialLinks)}
          />
        </div>
      </article>
    </div>
  );
};

Cover.propTypes = {
  className: PropTypes.string,
};

export default fadeIn(Cover);
