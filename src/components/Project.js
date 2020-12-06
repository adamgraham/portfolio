import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Page from './Page';
import '../styles/project.css';

const Project = ({ children, className }) => (
  <Page>
    <article className={classNames('project', className)}>{children}</article>
  </Page>
);

Project.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Project;
