import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuBar from './MenuBar';
import '../styles/page.css';

const Page = ({ children, className }) => (
  <div className={classNames('app-page', className)}>
    <div className="app-page__content">{children}</div>
    <MenuBar />
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Page;
