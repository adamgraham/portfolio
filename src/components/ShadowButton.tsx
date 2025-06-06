import '../styles/shadow-button.css';
import { Button, ButtonProps } from '@zigurous/forge-react';
import classNames from 'classnames';
import React from 'react';

export type ShadowButtonProps = {
  children?: React.ReactNode;
  className?: string;
} & ButtonProps;

export default function ShadowButton({
  children,
  className,
  ...rest
}: ShadowButtonProps) {
  return (
    <Button
      className={classNames('shadow-button', className)}
      shape="pill"
      size="sm"
      {...rest}
    >
      {children}
    </Button>
  );
}
