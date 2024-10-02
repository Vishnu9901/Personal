
import { marketingBannersData } from "../../../../utils/testData";
import { PromotionCard } from "../../molecules/PromotionCard";
import './marketingBanner1.styles.scss';

export const MarketingBanner1 = () => {
    return <>
        <div className="grid grid-flow-col gap-8">
            {marketingBannersData.map((banner) => (<PromotionCard {...banner}></PromotionCard>))}
        </div>
    </>
}