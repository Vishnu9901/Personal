import React from 'react';

interface modalBodyProps {
    children: React.ReactNode;
    className?: string

}

const ModalBody: React.FC<modalBodyProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-0 ${className}`}>
      {children}
    </div>
  )
}

export default ModalBody;