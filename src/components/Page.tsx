import { type LinkType, useIsMounted, useMediaQuery, useTheme } from '@zigurous/forge-react'; // prettier-ignore
import classNames from 'classnames';
import React, { useEffect } from 'react';
import Dock from './Dock';
import Header from './Header';

const defaultTheme = 'light';

export interface PageProps {
  children?: React.ReactNode;
  className?: string;
  dockLinks?: LinkType[];
  hideDock?: boolean;
  hideHeader?: boolean;
  id?: string;
  location: Location;
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
  title,
}: PageProps) {
  const mounted = useIsMounted();
  const print = useMediaQuery('print', false);
  const [theme, _, toggleTheme] = useTheme(defaultTheme);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (print) {
        document.body.setAttribute('data-theme', 'light');
      } else {
        document.body.setAttribute('data-theme', theme);
      }
    }
  }, [theme, print]);

  return (
    <div className="app">
      {!hideHeader && <Header location={location} pageTitle={title} />}
      <main className={classNames('page', className)} id={id}>
        {children}
      </main>
      {!hideDock && !print && (
        <Dock
          theme={mounted ? theme : defaultTheme}
          toggleTheme={toggleTheme}
          secondaryLinks={dockLinks}
        />
      )}
    </div>
  );
}
