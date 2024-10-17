import { useTheme } from '@zigurous/react-components';
import classNames from 'classnames';
import React from 'react';
import Dock from './Dock';
import Header from './Header';
import Metadata, { MetadataProps } from './Metadata';
import type { LinkType } from '../types/link';

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
  dockLinks?: LinkType[];
  hideDock?: boolean;
  hideHeader?: boolean;
  id?: string;
  location?: Location;
  metadata?: MetadataProps;
  title?: string;
}

export default function Page({
  children,
  className,
  dockLinks,
  hideDock = false,
  hideHeader = false,
  id,
  location,
  metadata,
  title,
}: PageProps) {
  const [theme, _, toggleTheme] = useTheme('light');
  return (
    <div className="app" data-theme={theme}>
      <Metadata {...metadata} />
      {!hideHeader && <Header location={location} pageTitle={title} />}
      <main className={classNames('page', className)} id={id}>
        {children}
      </main>
      {!hideDock && (
        <Dock
          theme={theme}
          toggleTheme={toggleTheme}
          secondaryLinks={dockLinks}
        />
      )}
    </div>
  );
}
