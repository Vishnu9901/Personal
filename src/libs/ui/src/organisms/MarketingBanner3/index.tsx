
import { Image } from "../../atoms/Image"
import arrow from '../../../assets/svgs/Right-Icon.e85181bb.svg'
import { PrimaryButton } from "../../molecules/PrimaryButton"
import './marketingBanner3.styles.scss'
interface MarketingBannerThreeProps {
    className?: string
    imgSrc: string,
    title: string,
    subTitle: string,
}

export const MarketingBannerThree: React.FC<MarketingBannerThreeProps> = ({ imgSrc, title, subTitle, className = '' }) => {
    return (<>
        {/*  grid grid-cols-1 lg:grid-cols-3 lg:gap-8 */}
        <div className={`marketingbanner3 ${className}`}>
            {/* <div >
                
            </div> */}
            <Image src={imgSrc}
                alt="product Image"
                className="marketingbanner3-image">
            </Image>
            <div className="bannerDeatails">
                <h2>{title}</h2>
                <p>{subTitle}</p>
                <div className="flex">
                    <PrimaryButton ><div className="flex">
                        Learn More  <Image src={arrow} alt="arrow"></Image></div></PrimaryButton>
                </div>

            </div>
        </div>
    </>)
}