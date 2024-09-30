import { PrimaryButton } from "../../molecules/PrimaryButton"
import { MarketingBannerThree } from "../../organisms/MarketingBanner3";

const marketingBanner3Data = {
    imgSrc:'https://www.pcaskinpro.com/cms/assets/5239f229-b873-4bd1-b36c-3b92745ebf8a.jpg?key=pca-en-us-default',
    title:'PCA SKIN Professional Peel Certification',
    subTitle:`Complete this course as a certified PCA SKIN Professional, ready to promptly apply new protocols, optimal techniques, and treatment strategies. Gain entry to PCA SKIN's extensive selection of professional treatment products, encompassing top-of-the-line professional peels, therapeutic treatment masks, and alternative treatments.`
}

export const LandingPageTemplate = () => {

    return (
        <>
            <div>
                {/* Carousel */}
                {/* <Carousel slides={carouselData} /> */}

                {/* marketing-banner-1*/}
                {/* <MarketingBannerList marketingBannersData={marketingBannersData} /> */}

                {/* promotion-banner-1 */}
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

                <p>Landing page template</p>
                <PrimaryButton> Hello</PrimaryButton>
            </div>

        </>
    )
}