import '../styles/shadow-button.css';
import { Button } from '@zigurous/react-components';
import React from 'react';

const ShadowButton = ({ children, ...rest }) => {
  return (
    <Button
      className="shadow-button"
      size={Button.size.small}
      shape={Button.shape.rounded}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ShadowButton;
