export interface ClassNames {
    containerClassName?: string;
    childClassName ?: string
}

// export interface ProductProps {
//     name: string;
//     imageSrc: string;
//     altText: string;
//     className?: string;
//     isBestSeller?: boolean; 
//     imageWidth?: string | number;
//     imageHeight?: string | number;
// }
export interface ProductProps {
    id: number;
    name: string;
    image: string;
    rating: number;
    isBestSeller: boolean;
  }