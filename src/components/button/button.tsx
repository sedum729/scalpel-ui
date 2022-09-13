import * as React from 'react';

export type ButtonProps = {};

interface CompoundedComponent extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
  // Group
};

const ActualButton = () => {
  return <div>'xx'</div>;
};

const Button = React.forwardRef<unknown, ButtonProps>(ActualButton) as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}

export default Button;