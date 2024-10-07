import { Variants } from "@utils/enums"
import { Image } from "@ui/atoms/Image"
import { LearnMore } from "@ui/organisms/LearnMoreButton"
import './promotionCard.styles.scss'
interface PromotionCardProps {
    title: string;
    subtext: string;
    imageUrl: string;
    bgColor?: string;
}
export const PromotionCard: React.FC<PromotionCardProps> = ({
    title, subtext, imageUrl, bgColor
}) => {
    return (<>
        <div className={`grid grid-cols-2 bg-black gap-8 text-white ${bgColor}`}>
            <div className="flex flex-col h-full justify-center px-8">
                <h1 className="font-HeroNewLight lg:text-3xl text-2xl tracking-normal lg:w-5/6 promotionCard-title">{title}</h1>
                <div className="mt-6 mb-6">
                    <p className="text-base font-HeroNewRegular leading-6 promotionCard-description">{subtext}</p></div>
                <div>
                    <LearnMore onClick={() => {
                        console.log('learn More')
                    }} variant={Variants.Primary}
                        className="text-[0.75rem] !py-2 !px-3 tracking-[.3px]"
                        iconSize="h-[1em] w-[1em]"
                    ></LearnMore>
                </div>

            </div>
            <div className="flex">
                <Image src={imageUrl}
                    alt={title}
                    className="w-full"
                ></Image>
            </div>
        </div></>
    )
}