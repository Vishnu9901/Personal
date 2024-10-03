import { IndividualBenefits, marketingBanner3Data } from "../../../../utils/testData";
import { MarketingBanner1 } from "../../organisms/MarketingBanner1";
import { MarketingBannerThree } from "../../organisms/MarketingBanner3";
import { PromotionBanner } from "../../organisms/PromotionBanner";
import { PromotionCarousel } from "../../organisms/PromotionCarousel";



export const LandingPageTemplate = () => {

    return (
        <>
            <div>
                {/* Carousel */}
                {/* <PromotionCarousel slides={[1,2,3,4]}></PromotionCarousel> */}

                {/* marketing-banner-1*/}
                <div className="hidden lg:flex py-12 px-16">
                    <MarketingBanner1></MarketingBanner1>
                </div>

                {/* <MarketingBannerList marketingBannersData={marketingBannersData} /> */}

                {/* promotion-banner-1 */}
                <div className="lg:px-16">
                    <PromotionBanner banners={IndividualBenefits}></PromotionBanner>
                </div>

                {/* <PromotionBannerSection banners={promotionBannersData} /> */}

                {/* marketing-banner-2" */}
                <div className="pb-4">
                    <MarketingBannerThree {...marketingBanner3Data}></MarketingBannerThree>
                </div>

                {/* <MarketingBannerTwo bannerData={marketingBannerTwo[0]} /> */}

                {/* popular-products */}
                {/* <div className="lg:pl-appPaddingLeft lg:pr-appPaddingRight pl-6 pr-6 mb-20 ">
        <PopularProducts products={products}></PopularProducts>
      </div> */}

                {/* <p>Landing page template</p>
                <PrimaryButton> Hello</PrimaryButton> */}
            </div>

        </>
    )
}