import React from 'react';
import AccordionItem from '../Accordion';


interface LabelAccordionProps {
  title: string;
  selectedItem: string | null;
  onItemClick: (item: string) => void;
  ulClassName?: string;
  liClassName?: string;
  children?: React.ReactNode; // Accept children
  items: {
    title: string;
    count?: number;
  }[];
}

const LabelAccordion: React.FC<LabelAccordionProps> = ({
  title,
  selectedItem,
  onItemClick,
  ulClassName,
  liClassName,
  children, // Include children here
  items,
}) => (
  <AccordionItem
    title={title}
    titleClassName="text-tertiary-400 font-bold lg:text-xl text-xl text-gray-700 tracking-normal leading-7 text-left"
    contentClassName="bg-white text-left tm:pr-4 tm:pl-4"
    containerClassName="border-b pt-3 pb-6"
    className='font-HeroNewBold font-bold lg:pr-0 lg:pl-0'
    svgIconColor='rgb(var(--primary-color))'
  >
    <ul className={`space-y-1 ${ulClassName}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${selectedItem === item.title 
            ? 'text-black py-2 focus-visible:px-3 font-bold'
            : 'text-gray-700 py-2 hover:text-appTheme hover:font-bold'
          } cursor-pointer ${liClassName}`}
          onClick={() => onItemClick(item.title)} 
        >
          {item.title}
          {/* <span className="ml-2 text-gray-500">({item.count})</span>  */}
        </li>
      ))}
    </ul>
    {children} 
  </AccordionItem>
);

export default LabelAccordion;
