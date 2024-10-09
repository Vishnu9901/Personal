import { IndividualBenefits, marketingBanner3Data } from '@utils/testData';
import { MarketingBanner1 } from '@ui/organisms/MarketingBanner1';
import { MarketingBannerThree } from '@ui/organisms/MarketingBanner3';
import { PopularProducts } from '@ui/organisms/PopularProudct';
import { PromotionBanner } from '@ui/organisms/PromotionBanner';
import { PromotionCarousel } from '@ui/organisms/PromotionCarousel';
import { products } from '@utils/testData';
import { carouselData } from '@utils/testData';
export const LandingPageTemplate = () => {

  return (
    <>
      <div>


        {/* Carousel */}
        <PromotionCarousel slides={carouselData}></PromotionCarousel>

        {/* marketing-banner-1*/}
        <div className="hidden lg:flex py-12 px-16">
          <MarketingBanner1></MarketingBanner1>
        </div>


        {/* promotion-banner-1 */}
        <div className="container marginLeftRightAuto lg:px-16">
          <PromotionBanner banners={IndividualBenefits}></PromotionBanner>
        </div>

        {/* marketing-banner-2" */}
        <div className="pb-4">
          <MarketingBannerThree {...marketingBanner3Data}></MarketingBannerThree>
        </div>

        {/* popular-products */}
        <div className="container marginLeftRightAuto px-6 lg:pl-appPaddingLeft lg:pr-appPaddingRight my-[5rem]">
          <PopularProducts products={products}></PopularProducts>
        </div>

      </div>

    </>
  )
}