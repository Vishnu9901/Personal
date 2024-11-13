import React from 'react';
import AccordionItem from '../Accordion';


interface LabelAccordionProps {
  title: string;
  onItemClick: (item: string) => void;
  ulClassName?: string;
  liClassName?: string;
  children?: React.ReactNode; // Accept children
  items: {
    title: string;
    count?: number;
  }[];
  options: string[],
  accordionClassNames?: string
}

const LabelAccordion: React.FC<LabelAccordionProps> = ({
  title,
  onItemClick,
  ulClassName,
  liClassName,
  children, // Include children here
  items,
  options,
  accordionClassNames
}) => (
  <AccordionItem
    title={title}
    titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7 text-left"
    contentClassName={`bg-white text-left`}
    containerClassName="border-b pt-3 pb-6"
    className={`font-HeroNewBold font-bold lg:pr-0 lg:pl-0 ${accordionClassNames}`}
    svgIconColor='rgb(var(--primary-color))'
  >
    <ul className={`space-y-1 ${ulClassName}`}>
      {items.map((item, index) => {
        const isSelected = options.some((filter) => filter?.toLowerCase() === item?.title?.toLowerCase());
        return <li
          key={index}
          className={`${isSelected
            ? 'text-black py-2 focus-visible:px-3 font-HeroNewExtraBold'
            : 'text-gray-700 py-2 hover:text-appTheme hover:font-HeroNewExtraBold '
            } cursor-pointer ${liClassName}`}
          onClick={() => onItemClick(item.title)}
        >
          {item.title}
          {/* <span className="ml-2 text-gray-500">({item.count})</span>  */}
        </li>
      })}
    </ul>
    {children}
  </AccordionItem>
);

export default LabelAccordion;
