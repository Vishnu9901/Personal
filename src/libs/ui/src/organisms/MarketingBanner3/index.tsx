
import { Image } from "../../atoms/Image"
import arrow from '../../../assets/Right-Icon.e85181bb.svg'
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
        <div className={`marketingbanner3 ${className}`}>
            <Image src={imgSrc}
                alt="product Image"
                className="marketingbanner3-image">
            </Image>
            <div className="bannerDeatails">
                <h2>{title}</h2>
                <p className="mt-6 mb-6">{subTitle}</p>
                <div className="flex">
                    <PrimaryButton className="learnMore" >
                        Learn More <Image src={arrow} alt="arrow"></Image>
                    </PrimaryButton>
                </div>

            </div>
        </div>
    </>)
}