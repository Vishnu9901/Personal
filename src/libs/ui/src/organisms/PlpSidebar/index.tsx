import { useProductsContext } from "@hooks/ProductsContextHook";
import { setPLPPageData } from "@store/services/slices/PageDataSlice";
import { Button } from "@ui/atoms/Button";
import CheckboxAccordion from "@ui/molecules/CheckBoxAccordion";
import LabelAccordion from "@ui/molecules/LabelAccordion"
import Modal from "@ui/molecules/Modal";
import { plpFilters } from "@utils/constants";
import { AccordionType, PLPFilterActions } from "@utils/enums";
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import PLPMobileMenu from "../PLPMobileMenu";
import RadioAccordion from "@ui/molecules/RadioButtonAccordion";

// import LabelAccordion from '../PlpLabelAccordian';
// import CheckboxAccordion from '../PlpCheckBoxAccordian';
// import RadioAccordion from '../PlpRadioAccordian';
// import Modal from '../PlpSortModal';
// import { plpFilters, AccordionType } from '@utils/plpFilterData';

interface FilterData {
  productCategory: string[];
  bestSeller: string[];
  productTypes: string[];
  skinConcern: string[];
  skinType: string[];
}

interface SidebarProps {
  className?: string;
  ulClassName?: string;
  liClassName?: string;
  onCategorySelect: (category: string | null) => void;
  onSortChange: (sortOption: string) => void;
  enableBestSeller: boolean;
}

const PlpAccordians: React.FC<SidebarProps> = ({
  className,
  ulClassName,
  liClassName,
  onCategorySelect,
  onSortChange,
  enableBestSeller,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [checkedFilters, setCheckedFilters] = useState<{ [key: string]: boolean }>({});
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    updateFilters,
    filters,
    clearFilters,
    sortOption,
    updateSortFilters
  } = useProductsContext()




  const handleSortChange = (sortOption: string) => {
    updateSortFilters([sortOption], PLPFilterActions.Add)
  };


  const handleCheckboxChange = (option: any) => {
    onCategorySelect(option)
    setCheckedFilters((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
    updateFilters([option]);
  };

  const handleProductCategoryClick = (category: string) => {
    clearFilters();
    if (category === "All Products") {
      dispatch(setPLPPageData({ subCategory: 'View All', category: "Daily care" }));
      return;
    }
    dispatch(setPLPPageData({ subCategory: category, category: "Daily care" }))
    updateFilters([category]);
  };

  const toggleShowCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  // Filter to show "Best Seller" only when `enableBestSeller` is true
  const displayFilters = enableBestSeller
    ? plpFilters
    : plpFilters.filter((filter: any) => filter.title !== 'Best Seller');



  return (
    <div className={`w-full text-center rounded-lg ${className}`}>
      <div className="block lg:hidden">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="text-appTheme font-bold border-solid border-2 border-appTheme w-full
           active:text-white active:bg-appBlackTheme active:border-black p-2 "
        >
          Show Filters & Sort
        </Button>
      </div>

      <div className="hidden lg:block">
        {displayFilters.map((filter: any, index: any) => (
          <div key={index}>
            {filter.AccordionType === AccordionType.Label && (
              <LabelAccordion
                title={filter.title}
                options={filters}
                onItemClick={handleProductCategoryClick}
                ulClassName={ulClassName}
                liClassName={liClassName}
                items={showAllCategories ? filter.options : filter.options.slice(0, 5)}
              >
                <button onClick={toggleShowCategories} className="text-appTheme mt-2">
                  {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
                </button>
              </LabelAccordion>
            )}

            {filter.AccordionType === AccordionType.Checkbox && (
              <CheckboxAccordion
                title={filter.title}
                options={filter.options.map((option: any) => option.title)}
                checkedFilters={checkedFilters}
                onCheckboxChange={handleCheckboxChange}
                ulClassName={ulClassName}
                liClassName={liClassName}
                selectedFilters={filters}

              />
            )}
          </div>
        ))}
      </div>
      {isModalOpen && <PLPMobileMenu onClose={() => setIsModalOpen(false)} title="Filter & Sort">
        {displayFilters.map((filter, index) => (
          <div key={index}>
            {filter.AccordionType === AccordionType.Radio && (
              <RadioAccordion
                title={filter.title}
                options={filter.options.map(option => option.title)}
                selectedOption={sortOption[0]}
                onOptionChange={handleSortChange}
                ulClassName={ulClassName}
                liClassName={liClassName}
                className=''
              />
            )}
            {filter.AccordionType === AccordionType.Label && (
              <LabelAccordion
                title={filter.title}
                options={filters}
                onItemClick={handleProductCategoryClick}
                ulClassName={ulClassName}
                liClassName={liClassName}
                items={showAllCategories ? filter.options : filter.options.slice(0, 5)}
                accordionClassNames="!px-0"
              >
                <button onClick={toggleShowCategories} className="text-appTheme mt-2">
                  {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
                </button>
              </LabelAccordion>
            )}

            {filter.AccordionType === AccordionType.Checkbox && (
              <CheckboxAccordion
                title={filter.title}
                options={filter.options.map((option: any) => option.title)}
                checkedFilters={checkedFilters}
                onCheckboxChange={handleCheckboxChange}
                ulClassName={ulClassName}
                liClassName={liClassName}
                selectedFilters={filters}
                accordionClassNames="!px-0"
              />
            )}
          </div>
        ))}
      </PLPMobileMenu>}
    </div>
  );
};

export default PlpAccordians;
