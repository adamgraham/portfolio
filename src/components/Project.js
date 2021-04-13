import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Page from './page';
import '../styles/project.css';

const Project = ({ children, className }) => (
  <Page>
    <article className={classNames('project', 'container-md', className)}>
      {children}
    </article>
  </Page>
);

Project.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Project;
