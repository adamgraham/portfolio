import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import GalleryContext, { useContextState } from './GalleryContext';
import Menu from './Menu';
import Metadata from './Metadata';
import { SlideProps } from './Slide';
import { getSessionIndex, setSessionIndex } from '../utils/session';

const Page = ({
  category,
  children,
  className,
  hideNavigation = false,
  id,
  location,
  metadata,
  slides,
}) => {
  const urlParams = new URLSearchParams(location?.search);
  const slideIndex = urlParams.has('index')
    ? Number.parseInt(urlParams.get('index')) || 0
    : getSessionIndex(category);
  const context = useContextState(category, slides, slideIndex);

  useEffect(() => {
    setSessionIndex(category, slideIndex);
  }, [category, slideIndex]);

  return (
    <GalleryContext.Provider value={context}>
      <div className="app" data-theme="light">
        <Metadata {...metadata} />
        {!hideNavigation && <Menu location={location} />}
        <main className={classNames('page', className)} id={id || category}>
          {children}
        </main>
      </div>
    </GalleryContext.Provider>
  );
};

Page.propTypes = {
  category: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  hideNavigation: PropTypes.bool,
  id: PropTypes.string,
  location: PropTypes.object,
  metadata: PropTypes.object,
  slides: PropTypes.arrayOf(SlideProps),
};

export default Page;
