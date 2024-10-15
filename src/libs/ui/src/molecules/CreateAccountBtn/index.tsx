import React, { useState } from 'react';

interface CreateAccountButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const CreateAccountButton: React.FC<CreateAccountButtonProps> = ({ children, className = '', onClick, }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      setTimeout(() => {
        onClick();
      }, 500)
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#125CE0] text-white transition-all duration-300 rounded-none !px-6 py-2.5 hover:bg-black hover:underline 
         ${isClicked ? 'rounded-l-full rounded-r-full' : 'rounded-md'} ${className} w-44 `}
    >
      {children}
    </button>
  );
};
