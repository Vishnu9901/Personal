
import { IndividualBenefitsCard, IndividualBenefitsCardProps } from '../../molecules/IndividualBenefitsCard';
import Slider from 'react-slick';
import './PromotionBanner.styles.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import { SecondaryButton } from '../../molecules/ScecondaryButton';
import arrowIcon from '../../../assets/Arrow-right-blue.495910aa.svg';
import hoverArrowIcon from '../../../assets/Arrow-right.8d33ac71.svg'

interface PromotionBannerListProps {
    banners: IndividualBenefitsCardProps[];
}

interface ArrowProps {
    onClick?: () => void;
    currentSlide: number;
    slideCount: number;
}
const PrevArrow: React.FC<ArrowProps> = ({ onClick, currentSlide }) => (
    <div
        className={`absolute left-0 z-10 cursor-pointer top-1/2 transform -translate-y-1/2 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        onClick={currentSlide === 0 ? undefined : onClick}
    >
        <span className="font-SwiperIconns text-[44px] text-[#007aff]">prev</span>
    </div>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick, currentSlide, slideCount }) => (
    <div
        className={`absolute right-0 z-10 cursor-pointer top-1/2 transform -translate-y-1/2 ${currentSlide === slideCount - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        onClick={currentSlide === slideCount - 1 ? undefined : onClick}
    >
        <span className="font-SwiperIconns text-[44px] text-[#007aff]">next</span>
    </div>
);
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow currentSlide={0} slideCount={0} />,
    nextArrow: <NextArrow currentSlide={0} slideCount={0} />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
export const PromotionBanner: React.FC<PromotionBannerListProps> = ({ banners }) => {
    return (<>
        <div className="grid grid-cols-4">
            <div className="col-span-4 text-center pt-6 px-4 lg:m-auto lg:max-w-[66.666667%]">
                <div className="font-HeroNewBold text-[0.75rem] leading-4 tracking-widest promotionbanner-maintitle">BETTER VALUE & MORE CONVENIENCE</div>
                <div className="tracking-normal text-5xl py-4 leading-10">Trust the experts</div>
                <div className="max-w-4xl m-auto text-[0.875rem] promotionbanner-des leading-6">When it comes to your business, trust the experts. PCA SKIN takes a bold approach to customer service that is unmatched in the clinical skincare industry. We work closely with our professionals to help them build their own successful practices by providing marketing tools, product knowledge, and more. Why? Because PCA SKIN Certified Professionals are an extension of our mission to deliver the best patient results. Together, we can transform skin and lives around the globe.</div>
            </div>
            <div className='hidden col-span-4 lg:grid grid-cols-4 lg:gap-8 lg:py-8'>
                {banners.map((benifit) => {
                    return <IndividualBenefitsCard {...benifit}></IndividualBenefitsCard>
                })}
            </div>
            <div className="lg:hidden px-4 py-3 col-span-4 ">
                <Slider
                    {...settings}
                    prevArrow={<PrevArrow currentSlide={0} slideCount={0} />}
                    nextArrow={<NextArrow currentSlide={0} slideCount={0} />}
                >
                    {banners.map((benifit) => (<IndividualBenefitsCard {...benifit}></IndividualBenefitsCard>))}

                </Slider>
                <div className='pt-10 lg:pt-4 pb-12 lg:pb-32 flex justify-center'>
                    <SecondaryButton
                        onClick={() => console.log('Button clicked!')}
                        className="flex font-HeroNewBold hover:underline items-center !m-0 justify-center !text-[#125ce0] border !border-[#125ee0] font-bold px-6 py-2.5 hover:!bg-black hover:!border-transparent group hover:!text-white"
                    >
                        Learn More
                        <div className="ml-2 flex items-center">
                            <img
                                src={arrowIcon}
                                alt="Arrow icon"
                                className='flex group-hover:hidden'
                            />
                            <img
                                src={hoverArrowIcon}
                                alt="Arrow hover icon"
                                 className='hidden group-hover:flex'
                            />
                        </div>
                    </SecondaryButton>
                </div>
            </div>

        </div>
    </>)
}