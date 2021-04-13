import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/page.css';

const Page = ({ children, className }) => (
  <main className={classNames('app-page', className)}>{children}</main>
);

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Page;
