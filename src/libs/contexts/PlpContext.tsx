
import React, { createContext, useState, ReactNode, useMemo } from 'react';
import { viewAllProducts } from '@utils/testData';
import { Product } from '@utils/interfaces';
import { PLPFilterActions } from '@utils/enums';

interface ProductContextType {
  selectedProductCategory: string;
  setSelectedProductCategory: (category: string) => void;
  isBestSeller: boolean;
  setIsBestSeller: (checked: boolean) => void;
  filters: string[];
  updateFilters: (filters: string[], action:PLPFilterActions) => void;
  products: Product[];
  SetSortOption: (option: string) => void;
  sortOption: string;
}

// Create the context
export const PLPContext = createContext<ProductContextType | undefined>(undefined);

// Create a provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('All Products');
  const [isBestSeller, setIsBestSeller] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [sortOption, SetSortOption] = useState<string>("");

  // Calculate filtered products based on context values
  const products = useMemo(() => {
    console.log('filters....', filters)
    return viewAllProducts.filter(product => {
      // const matchesCategory = selectedProductCategory === 'All Products' || product.category === selectedProductCategory;
      // const matchesBestSeller = !isBestSeller || product.isBestSeller;
      const matchesCategory = selectedProductCategory === 'All Products'
      return matchesCategory || filters.includes(product.category);
    });
  }, [selectedProductCategory, isBestSeller, filters, sortOption]);


  const updateFilters = (filterlist: string[], action: PLPFilterActions = PLPFilterActions.Add) => {

    if (action === PLPFilterActions.Add) {
      setFilters((prev) => ([
        ...prev, ...filterlist
      ]))
      return;
    }

    if (action === PLPFilterActions.Remove) {
      const updatedFilters = filters.filter((filter) => !filterlist.includes(filter))
      setFilters(updatedFilters);
    }

  }

  return (
    <PLPContext.Provider value={{
      selectedProductCategory,
      setSelectedProductCategory,
      isBestSeller,
      setIsBestSeller,
      filters,
      updateFilters,
      products,
      sortOption,
      SetSortOption
    }}>
      {children}
    </PLPContext.Provider>
  );
};



