import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Menu from './menu';
import { SlideProps } from './slide';

const Page = ({
  category,
  children,
  className,
  gallery,
  id,
  location,
  setSlideIndex,
  slideIndex,
}) => (
  <div className="app">
    <main className={classNames('page', className)} id={id}>
      {children}
    </main>
    <Menu
      category={category}
      gallery={gallery}
      location={location}
      setSlideIndex={setSlideIndex}
      slideIndex={slideIndex}
    />
  </div>
);

Page.propTypes = {
  category: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  gallery: PropTypes.arrayOf(SlideProps),
  id: PropTypes.string,
  location: PropTypes.object,
  setSlideIndex: PropTypes.func,
  slideIndex: PropTypes.number,
};

export default Page;
