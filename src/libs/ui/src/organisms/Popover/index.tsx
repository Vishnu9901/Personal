import React, { useState, useRef, useEffect } from 'react';


interface PopoverProps {
    children: React.ReactNode,
    className?: string
}

const Popover: React.FC<PopoverProps> = ({
  children,
  className = ''
}) => {
  const [popoverStyles, setPopoverStyles] = useState({});
  const buttonRef = useRef<any>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

   

  useEffect(() => {
    if (buttonRef.current && popoverRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Calculate available space
      const spaceAbove = buttonRect.top;
      const spaceBelow = viewportHeight - buttonRect.bottom;
      const spaceLeft = buttonRect.left;
      const spaceRight = viewportWidth - buttonRect.right;

      let newPopoverStyles = {};

      // Check where there's enough space and position accordingly
      if (spaceBelow >= popoverRect.height) {
        // Enough space below the button
        newPopoverStyles = {
          //   top: `${buttonRect.bottom + window.scrollY}px`,
          //   left: `${buttonRect.left + window.scrollX}px`,
        };
      } else if (spaceAbove >= popoverRect.height) {
        // Enough space above the button
        newPopoverStyles = {
          //   top: `${buttonRect.top - popoverRect.height + window.scrollY}px`,
          //   left: `${buttonRect.left + window.scrollX}px`,
        };
      } else if (spaceRight >= popoverRect.width) {
        // Enough space to the right of the button
        newPopoverStyles = {
          //   top: `${buttonRect.top + window.scrollY}px`,
          //   left: `${buttonRect.right + window.scrollX}px`,
        };
      } else if (spaceLeft >= popoverRect.width) {
        // Enough space to the left of the button
        newPopoverStyles = {
          //   top: `${buttonRect.top + window.scrollY}px`,
          //   left: `${buttonRect.left - popoverRect.width + window.scrollX}px`,
        };
      } else {
        // Default: position below if no space in other directions
        newPopoverStyles = {
          //   top: `${buttonRect.bottom + window.scrollY}px`,
          //   left: `${buttonRect.left + window.scrollX}px`,
        };
      }

      setPopoverStyles(newPopoverStyles);
    }
  }, []);

  return (
    <div
      ref={popoverRef}
      className={`absolute z-[10000] bg-white rounded-2xl shadow-lg  min-w-72 right-0 ${className}`}
      style={popoverStyles}
    >
      {children}
    </div>
  );
};

export default Popover;
