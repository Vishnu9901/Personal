import React from 'react';
import AccordionItem from '../Accordion';
import { Checkbox } from '../Checkbox';


interface CheckboxAccordionProps {
  title: string;
  options: string[];
  checkedFilters: { [key: string]: boolean };
  onCheckboxChange: (option: any) => void;
  ulClassName?: string;
  liClassName?: string;
  selectedFilters: string[],
  accordionClassNames?: string
}

const CheckboxAccordion: React.FC<CheckboxAccordionProps> = ({
  title,
  options,
  checkedFilters,
  onCheckboxChange,
  ulClassName,
  liClassName,
  selectedFilters = [],
  accordionClassNames
}) => {

  return (
    <AccordionItem
      title={title}
      titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7 text-left"
      contentClassName="bg-white text-left"
      containerClassName="border-b pt-3 pb-3"
      className={`font-HeroNewBold font-bold lg:pr-0 lg:pl-0 ${accordionClassNames}`}
      svgIconColor='rgb(var(--primary-color))'
    >
      <ul className={`space-y-1 ${ulClassName}`}>
        {options.map((option: any, index) => {
          const isSelected = selectedFilters.some((filter) => filter?.toLowerCase() === option?.toLowerCase());
          return <li
            key={index}
            className={`${isSelected ? 'text-appTextColor font-bold pb-1 mr-2' : 'text-gray-700 pb-1 mr-2 hover:font-bold hover:text-appTheme'
              } cursor-pointer ${liClassName}`}
          >
            <Checkbox
              className="mr-2"
              checked={isSelected}
              onChange={(e) => {
                console.log('e', e, option)
                onCheckboxChange(option)
              }}
              key={option}
            >
              {option}
              {/* <span className="ml-2 text-gray-500">({option?.count})</span>  */}
            </Checkbox>
          </li>
        })}
      </ul>
    </AccordionItem>
  )
}

export default CheckboxAccordion;