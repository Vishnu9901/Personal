import { Image } from "../../atoms/Image"

interface IndividualBenefitsCardProps {
    imageSrc: string,
    title: string,
    description: string
    imageAlt: string
}

// https://www.pcaskinpro.com/cms/assets/f0fb8ed6-a79c-445e-a75f-461973c31ee7.jpg?key=pca-en-us-default
// Order Management
// Effortlessly handle orders and invoices in your account and stay up-to-date on any and all business affairs.
export const IndividualBenefitsCard: React.FC<IndividualBenefitsCardProps> = ({
    imageSrc, title, description, imageAlt = ''
}) => {
    return (<>
        <div className='mx-auto flex flex-col items-center'>
            <div className='relative mx-auto mb-5'>
                <Image src={imageSrc}
                    alt={imageAlt}
                ></Image>
            </div>
            <p className='font-HeroNewBold leading-6'>{title}</p>
            <p className='font-light leading-6 text-tertiary-400 px-9 lg:px-0 promotionbanner-des text-center'>{description}</p>
        </div>
    </>)
}