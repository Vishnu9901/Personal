import { CarouselSlide } from '@ui/molecules/CarouselSlide';
import { useState } from 'react';
// import { Carousel as ReactCarousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './PromotionCarousel.styles.scss'
import { SlideTheam } from '@utils/enums';

export interface CarouselProps {
    slides: any | {
        imgSrc: string;
        imgAlt: string;
        heading: string;
        subheading: string;
        buttonText: string;
        bgColor: string;
    }[];
}

export const PromotionCarousel: React.FC<CarouselProps> = ({ slides }) => {
    const [theam, SetTheam] = useState('');
    return (
        <div className={`promotionCarousel ${theam == SlideTheam.Dark ? 'bg-black' : ''}`}>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onSlideChange={(slide) => {
                    if (slides[slide.activeIndex].bgColor === 'bg-black text-white') {
                        SetTheam(SlideTheam.Dark);
                        return
                    }
                    SetTheam('')
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className={`${theam == SlideTheam.Dark ? 'darkTheam' : ''}`}
            >
                {slides.map((slide: any, index: any) => (
                    <SwiperSlide >
                        <CarouselSlide key={index} {...slide}></CarouselSlide>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}