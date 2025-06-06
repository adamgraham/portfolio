import '../styles/logo.css';
import { Link } from '@zigurous/forge-react';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

export interface LogoProps {
  rounded?: boolean;
  size?: number;
}

export default function Logo({ rounded = false, size = 48 }: LogoProps) {
  return (
    <div
      className={classNames('ag-logo', { 'ag-logo--rounded': rounded })}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    >
      <Link aria-label="Logo" as={GatsbyLink} to="/" unstyled>
        <div className="ag-logo__background" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <polygon points="345.17 257.56 233.75 257.56 212.47 294.58 324.06 294.58 382.6 396.41 425 396.41 345.17 257.56" />
          <polygon points="168.69 322.35 254.36 173.36 286.8 229.79 329.2 229.79 254.36 99.59 105 359.38 333.5 359.38 312.21 322.35 168.69 322.35" />
        </svg>
      </Link>
    </div>
  );
}
