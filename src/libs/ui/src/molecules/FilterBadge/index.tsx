import React from 'react';
import BadgeCloseIcon from '@ui/atoms/SvgAtoms/BadgeClose';

interface FilterBadgeProps {
  onRemove: () => void;
  children: React.ReactNode; 
}

export const FilterBadge: React.FC<FilterBadgeProps> = ({ children, onRemove }) => {
  return (
    <div
      className="flex pr-2 pl-[.9rem] pt-2 pb-2 items-center justify-between bg-gray-200 px-3 py-1 rounded-full m-2 transition-all duration-200 ease-in-out min-w-[100px] group"
    >
      <span className="text-appTheme group-hover:font-HeroNewExtraBold  text-xs mr-2">{children}</span>
      <button
        onClick={onRemove}
        className="ml-4 bg-transparent p-0 border-none text-appTheme hover:text-appTheme-opacity-30 hover:font-bold"
        aria-label="Remove Filter"
      >
        <BadgeCloseIcon></BadgeCloseIcon>
      </button>
    </div>
  );
};
