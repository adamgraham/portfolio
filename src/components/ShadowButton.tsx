import '../styles/shadow-button.css';
import { Button, ButtonProps } from '@zigurous/react-components';
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
      size="sm"
      shape="rounded"
      {...rest}
    >
      {children}
    </Button>
  );
}
