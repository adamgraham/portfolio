import { fadeIn } from '@zigurous/react-components';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/page.css';

const Page = ({ children, className }) => (
  <div className={classNames('app-page', className)}>{children}</div>
);

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default fadeIn(Page);
