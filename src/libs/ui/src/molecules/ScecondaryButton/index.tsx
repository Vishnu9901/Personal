import React from 'react';
import { Button } from '../../atoms/Button';


interface ISecondaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string; // Allow passing custom class
}

export const SecondaryButton: React.FC<ISecondaryButton> = ({ children, onClick, className = '', ...rest }) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-white text-blue-700 p-2 m-1 hover:bg-blue-700 hover:text-white ${className}`}
      {...rest} 
    >
      {children}
    </Button>
  );
};