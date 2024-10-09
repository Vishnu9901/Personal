import { Image } from '@ui/atoms/Image'
import { SlideContent } from '../SlideContnet';
import './carouselSlide.styles.scss'
interface CarouselSlideProps {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    subheading: string;
    buttonText: string;
    bgColor: string;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  imgSrc, imgAlt, heading, subheading, buttonText, bgColor
}) => {
  return (
    <>
      <div className={`w-full lg:grid grid-cols-2 carouselSlide ${bgColor}`}>
        <div className="h-[--hero-banner-height-mob]  lg:h-[--hero-banner-height-desk] lg:max-h-[--hero-banner-height-desk]">
          <Image src={imgSrc} alt={imgAlt} className="h-full object-cover w-full"></Image>
        </div>
        <div className="px-4 lg:px-[3.5rem] lg:h-full">
          <div className="mt-8 mb-16 lg:my-0 lg:flex flex-col h-full justify-center items-start">
            <SlideContent title={heading} subTitle={subheading} btnText={buttonText}></SlideContent>
          </div>
        </div>
      </div>
    </>
  )
}