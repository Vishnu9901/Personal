import React from 'react';

interface BadgeProps {
  className?:string;
  children: React.ReactNode; // Use children to pass content
}

const Badge: React.FC<BadgeProps> = ({
  className,
  children,
}) => {
  return (
    <div>
      <span
        className={`text-white font-bold bg-blue-700 py-1 px-2 rounded-md ${className}`}
      >
        {children} {/* Render children here */}
      </span>
    </div>
  );
};

export default Badge;