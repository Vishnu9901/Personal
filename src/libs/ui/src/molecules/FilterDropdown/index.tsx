import React, { useState, useRef, useEffect, ReactNode } from 'react';
import DropDownIcon from '@ui/atoms/SvgAtoms/DropDown';
import { Button } from '@ui/atoms/Button';

interface FilterDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  buttonClassName?: string; 
  ulClassName?: string; 
  liClassName?: string;
  children?: ReactNode;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  options,
  onSelect,
  buttonClassName = '',
  ulClassName = '',
  liClassName = '',
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [prevOption, setPrevOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setPrevOption(selectedOption); 
    setSelectedOption(option);
    onSelect(option); 
    setIsOpen(false); 
  };

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedOption(prevOption);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [prevOption]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        className={`flex items-center px-1 py-3 min-w-44 bg-white border rounded-full shadow-sm focus:outline-none ${isOpen ? 'border-appTheme' : 'border-black'} ${buttonClassName}`}
      >
        <DropDownIcon stroke='whites'></DropDownIcon>
        <span className="text-sm font-medium ml-1 text-gray-700">{selectedOption}</span>
      </Button>

      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-black rounded-md shadow-lg">
          <ul className={`py-1 max-h-60 overflow-y-auto ${ulClassName}`}>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`cursor-pointer px-4 py-2 text-sm text-gray-700 ${selectedOption === option ? 'bg-appTheme text-white' : 'hover:bg-appTheme hover:text-white'} ${liClassName}`}
              >
                {option}
              </li>
            ))}
          </ul>
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
