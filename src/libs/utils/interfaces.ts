export interface ClassNames {
    containerClassName?: string;
    childClassName?: string
}

export interface Product {
    id: number;
    name: string;
    image: string;
    rating: number;
    isBestSeller: boolean;
    category: string;
    price:number;
  }


export interface HeaderNavigationItem {
    title: string,
    items: string[],
    hasMore?: boolean
}