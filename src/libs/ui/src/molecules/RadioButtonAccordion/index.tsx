import AccordionItem from '@ui/molecules/Accordion';
import React from 'react';

interface RadioAccordionProps {
  title: string;
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
  ulClassName?: string;
  liClassName?: string;
  className?: string;

}

const RadioAccordion: React.FC<RadioAccordionProps> = ({
  title,
  options,
  selectedOption,
  onOptionChange,
  ulClassName,
  liClassName,
  className
}) => (
  <AccordionItem
  title={title}
  titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7 text-left"
  contentClassName={`bg-white text-left`}
  containerClassName="border-b pt-3 pb-6"
  className={`font-HeroNewBold font-bold lg:pr-0 lg:pl-0 !px-0 `}
  // ${accordionClassNames}
  svgIconColor='rgb(var(--primary-color))'
  >
    <ul className={`space-y-1 ${ulClassName}`}>
      {options.map((option, index) => {
        
        const isSelected = selectedOption?.toLowerCase() === option?.toLowerCase();
        console.log('Selected Option', isSelected, selectedOption, option)
        return <li
        onClick={(event:any) => {
          event?.stopPropagation();
          onOptionChange(option)
        }}
          key={index}
          className={` py-2 ${isSelected ? 'text-appTextColor font-bold' : 'text-gray-700 dark:text-appWhiteTheme-opacity-50'
            } cursor-pointer ${liClassName}`}
        >
          <input
            type="radio"
            name="sort"
            value={option}
            checked={isSelected}
            onChange={(event:any) => {
              console.log('event', event)
              // event?.stopPropagation()
              // onOptionChange(option);
            }}
            className="mr-2"
            key={option}
          />
          {option}
        </li>
      })}
    </ul>
  </AccordionItem>
);

export default RadioAccordion;