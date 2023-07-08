import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Menu from './Menu';
import Metadata from './Metadata';

const Page = ({ children, className, id, location, metadata }) => (
  <div className="app" data-theme="dark">
    <Metadata {...metadata} />
    <main className={classNames('page', className)} id={id}>
      {children}
    </main>
    <Menu location={location} />
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  location: PropTypes.object,
  metadata: PropTypes.object,
};

export default Page;
