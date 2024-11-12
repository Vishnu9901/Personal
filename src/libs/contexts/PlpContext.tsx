
import React, { createContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { viewAllProducts } from '@utils/testData';
import { Product } from '@utils/interfaces';
import { PLPFilterActions } from '@utils/enums';
import { useLocation } from 'react-router-dom';


interface ProductContextType {
  selectedProductCategory: string;
  setSelectedProductCategory: (category: string) => void;
  isBestSeller: boolean;
  setIsBestSeller: (checked: boolean) => void;
  filters: string[];
  updateFilters: (filters: string[], action?: string) => void;
  products: Product[];
  sortOption: string[];
  updateSortFilters: (filters: string[], action: PLPFilterActions) => void;
  loadMore: () => void;
  totalProducts: number;
  showLoadMore: boolean
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
  const [totalProducts, SetTotalProducts] = useState<number>(0);
  const location = useLocation();
  const [showLoadMore, SetShowLoadMore] = useState(true);
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



  const updateFilters = (filterlist: string[] = [], action: string = '') => {
    if (action === PLPFilterActions.ClearAll) {
      setFilters([]);
      return
    }
    
    let tempList = [...filters];
    filterlist.forEach((newFilter) => {
      const hasFilter = tempList.findIndex((filter) => filter === newFilter);
      if (hasFilter > -1) {
        tempList = tempList.filter((filter) => filter != newFilter);
      } else {
        tempList.push(newFilter);
      }
    })
    console.log('tempList update', tempList)
    setFilters(tempList);
  }




  const updateSortFilters = (sortOption: string[]) => {
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
      // const matchesCategory = selectedProductCategory === 'All Products'
      // return matchesCategory || filters.includes(product.category);
      if (filters.length > 0) {
        return filters.includes(product.category);
      }
      return true;
    });

    setProducts(products.slice(0, limit + 1));
    SetTotalProducts(products.length);
    SetShowLoadMore(products.length - 1 > limit);
  }, [selectedProductCategory, isBestSeller, filters, sortOption, limit])

  useEffect(() => {
    if (location.pathname === '/products') {
      let allFilters = ['']
      if (location.search.includes('?')) {
        allFilters = location?.search?.split('?')[1]?.split('&');
        allFilters = allFilters?.map((filter) => {
          const filterValue = filter?.split('=')[1];
          return filterValue?.replace(/%20/g, " ");
        })
      }
      setFilters(allFilters)
    }
  }, [location])

 

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
      totalProducts,
      showLoadMore
    }}>
      {children}
    </PLPContext.Provider>
  );
};



