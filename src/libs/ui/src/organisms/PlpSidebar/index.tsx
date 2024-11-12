import { useProductsContext } from "@hooks/ProductsContextHook";
import { setPLPPageData } from "@store/services/slices/PageDataSlice";
import CheckboxAccordion from "@ui/molecules/CheckBoxAccordion";
import LabelAccordion from "@ui/molecules/LabelAccordion"
import { plpFilters } from "@utils/constants";
import { AccordionType } from "@utils/enums";
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

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
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    updateFilters,
    filters,
    clearFilters
  } = useProductsContext()




  // const handleSortChange = (sortOption: string) => {
  //     setSelectedSort(sortOption);
  //     onSortChange(sortOption);
  // };


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


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1020);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`w-full ${isSmallScreen ? 'space-y-1' : 'pl-2 space-y-6'} text-center rounded-lg ${className}`}>
      {/* {isSmallScreen && (
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-600 font-bold"
                >
                    Show Filters & Sort
                </button>
            )} */}

      <div>
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
                filters={filters}
              />
            )}
          </div>
        ))}
      </div>
      {/* {isSmallScreen ? (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Filter & Sort">
          {displayFilters.map((filter, index) => (
            <div key={index}>
              {filter.AccordionType === AccordionType.Radio && (
                <RadioAccordion
                  title={filter.title}
                  options={filter.options.map(option => option.title)}
                  selectedOption={selectedSort}
                  onOptionChange={handleSortChange}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                  className=''
                />
              )}
              {filter.AccordionType === AccordionType.Label && (
                <LabelAccordion
                  title={filter.title}
                  selectedItem={selectedProductCategory}
                  onItemClick={handleProductCategoryClick}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                  items={showAllCategories ? filter.options : filter.options.slice(0, 5)}
                >
                  <button onClick={toggleShowCategories} className="text-blue-600 mt-2">
                    {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
                  </button>
                </LabelAccordion>
              )}

              {filter.AccordionType === AccordionType.Checkbox && (
                <CheckboxAccordion
                  title={filter.title}
                  options={filter.options.map(option => option.title)}
                  checkedFilters={checkedFilters}
                  onCheckboxChange={handleCheckboxChange}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                />
              )}
            </div>
          ))}
        </Modal>
      ) : (
        <div>
          {displayFilters.map((filter, index) => (
            <div key={index}>
              {filter.AccordionType === AccordionType.Label && (
                <LabelAccordion
                  title={filter.title}
                  selectedItem={selectedProductCategory}
                  onItemClick={handleProductCategoryClick}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                  items={showAllCategories ? filter.options : filter.options.slice(0, 5)}
                >
                  <button onClick={toggleShowCategories} className="text-blue-600 mt-2">
                    {showAllCategories ? 'Show Less Categories' : 'Show All Categories'}
                  </button>
                </LabelAccordion>
              )}

              {filter.AccordionType === AccordionType.Checkbox && (
                <CheckboxAccordion
                  title={filter.title}
                  options={filter.options.map(option => option.title)}
                  checkedFilters={checkedFilters}
                  onCheckboxChange={handleCheckboxChange}
                  ulClassName={ulClassName}
                  liClassName={liClassName}
                />
              )}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default PlpAccordians;
