import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Menu from './menu';
import { SlideProps } from './slide';

const Page = ({
  children,
  className,
  gallery,
  id,
  location,
  onRequestSlideIndex,
}) => (
  <div className="app">
    <main className={classNames('page', className)} id={id}>
      {children}
    </main>
    <Menu
      gallery={gallery}
      location={location}
      onRequestSlideIndex={onRequestSlideIndex}
    />
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gallery: PropTypes.arrayOf(SlideProps),
  id: PropTypes.string,
  location: PropTypes.object,
  onRequestSlideIndex: PropTypes.func,
};

export default Page;
