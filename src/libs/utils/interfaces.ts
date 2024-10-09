export interface ClassNames {
    containerClassName?: string;
    childClassName?: string
}


export interface ProductProps {
    id: number;
    name: string;
    image: string;
    rating: number;
    isBestSeller: boolean;
}

export interface HeaderNavigationItem {
    title: string,
    items: string[],
    hasMore?: boolean
}