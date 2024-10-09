import React, { ReactNode, ButtonHTMLAttributes, MouseEventHandler, KeyboardEventHandler } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, type = 'button', className = '', ...rest }) => (
  <button type={type} className={className} {...rest}>
    {children}
  </button>
)