
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { viewAllProducts } from '@utils/testData';
import { Product } from '@utils/interfaces';
import { PLPFilterActions } from '@utils/enums';


interface ProductContextType {
  selectedProductCategory: string;
  setSelectedProductCategory: (category: string) => void;
  isBestSeller: boolean;
  setIsBestSeller: (checked: boolean) => void;
  filters: string[];
  updateFilters: (filters: string[], action: PLPFilterActions) => void;
  products: Product[];
  sortOption: string[];
  updateSortFilters: (filters: string[], action: PLPFilterActions) => void;
  loadMore: () => void;
  totalProducts:number
}

// Create the context
export const PLPContext = createContext<ProductContextType | undefined>(undefined);

// Create a provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('All Products');
  const [isBestSeller, setIsBestSeller] = useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [sortOption, SetSortOptions] = useState<string[]>([]);
  const [limit, SetLimit] = useState(9);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, SetTotalProducts] = useState<number>(0)
  // Calculate filtered products based on context values
  // const products = useMemo(() => {
  //   console.log('filters....', filters, sortOption)
  //   return viewAllProducts.filter(product => {
  //     // const matchesCategory = selectedProductCategory === 'All Products' || product.category === selectedProductCategory;
  //     // const matchesBestSeller = !isBestSeller || product.isBestSeller;
  //     const matchesCategory = selectedProductCategory === 'All Products'
  //     return matchesCategory || filters.includes(product.category);
  //   });
  // }, [selectedProductCategory, isBestSeller, filters, sortOption]);



  const updateFilters = (filterlist: string[] = [], action: PLPFilterActions = PLPFilterActions.Add) => {

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

    if (action === PLPFilterActions.ClearAll) {
      setFilters([]);
    }

  }

  const updateSortFilters = (sortOption: string[], action: PLPFilterActions) => {
    console.log('sortOption', sortOption)
    SetSortOptions([...sortOption])
  }

  const loadMore = () => {
    SetLimit((prev) => prev + 1)
  }

  useEffect(() => {
    console.log('viewAllProducts', viewAllProducts)
   
    const products = viewAllProducts.filter(product => {
      // const matchesCategory = selectedProductCategory === 'All Products' || product.category === selectedProductCategory;
      // const matchesBestSeller = !isBestSeller || product.isBestSeller;
      const matchesCategory = selectedProductCategory === 'All Products'
      return matchesCategory || filters.includes(product.category);
    }).splice(0, limit);

    setProducts(products);
    SetTotalProducts(viewAllProducts.length);
  }, [selectedProductCategory, isBestSeller, filters, sortOption, limit])


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
      updateSortFilters,
      loadMore,
      totalProducts
    }}>
      {children}
    </PLPContext.Provider>
  );
};



