
// import React from 'react';
import { PopularProductsHeader } from '@ui/molecules/ProductsHeader'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { sliderSettings } from '@utils/settings';
import { Product } from '@ui/molecules/Product';
import { Product as ProductProps } from '@utils/interfaces'

interface PopularProductsProps {
    products: ProductProps[]
}


export const RecentlyViewedProducts: React.FC<PopularProductsProps> = ({ products }) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);

  const handleScroll = (direction: string) => {
    console.log('direction', direction)
    if (direction === 'left') {
      sliderRef.current.slickPrev();
      return;
    }
    sliderRef.current.slickNext();
  };

  return (
    <div className="flex flex-col mx-5 lg:mx-0">
      <div>
        <PopularProductsHeader
          title="Recently Viewed Products"
          handleScroll={handleScroll}
          showDescription={false}
        >
        </PopularProductsHeader>
      </div>
      <div>
        <Slider ref={sliderRef} {...sliderSettings}>
          {products.map((product) => (
            <Product {...product} key={product.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}