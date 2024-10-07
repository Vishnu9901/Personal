import { useState } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
    const [currentIndex, setCurrentIndex] = useState(0);

    const onChange = (index: number) => {
        setCurrentIndex(index);
    };
    // @ts-expect-error hasPrev will use in future
    const renderPrevArrow = (onClickHandler: () => void, hasPrev: boolean, label: string) => {
        const currentSlide = slides[currentIndex];
        return (
            <button
                type="button"
                onClick={onClickHandler}
                className={currentSlide.bgColor.includes('bg-black') ? 'custom-prev-arrow-black' : 'custom-prev-arrow-other'}
                aria-label={label}
            />
        );
    };
    // @ts-expect-error hasPrev will use in future
    const renderNextArrow = (onClickHandler: () => void, hasNext: boolean, label: string) => {
        const currentSlide = slides[currentIndex];
        return (
            <button
                type="button"
                onClick={onClickHandler}
                className={currentSlide.bgColor.includes('bg-black') ? 'custom-next-arrow-black' : 'custom-next-arrow-other'}
                aria-label={label}
            />
        );
    };
    return (
        <ReactCarousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            className="carousel-container"
            onChange={onChange}
            renderArrowPrev={renderPrevArrow}
            renderArrowNext={renderNextArrow}>
            <p>Hello1</p>
            <p>Hello2</p>
            <p>Hello3</p>
            <p>Hello4</p>
        </ReactCarousel>
    )
}