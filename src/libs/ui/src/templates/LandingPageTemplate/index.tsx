import { marketingBanner3Data } from "../../../../utils/testData";
import { MarketingBannerThree } from "../../organisms/MarketingBanner3";
import { PromotionBanner } from "../../organisms/PromotionBanner";



export const LandingPageTemplate = () => {

    return (
        <>
            <div>
                {/* Carousel */}
                {/* <Carousel slides={carouselData} /> */}

                {/* marketing-banner-1*/}
                {/* <MarketingBannerList marketingBannersData={marketingBannersData} /> */}

                {/* promotion-banner-1 */}
                <div className="px-16">
                    <PromotionBanner></PromotionBanner>
                </div>

                {/* <PromotionBannerSection banners={promotionBannersData} /> */}

                {/* marketing-banner-2" */}
                <div className="">
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