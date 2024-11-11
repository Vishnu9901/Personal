import MarketingIcon from '../MarketingIcon'

export interface IndividualBenefitsCardProps {
  title: string,
  description: string
}

export const IndividualBenefitsCard: React.FC<IndividualBenefitsCardProps> = ({
   title, 
   description
}) => {
  return (
    <>
      <div className='mx-auto flex flex-col items-center'>
        <div className='relative mx-auto mb-5'>
          <MarketingIcon title={title}></MarketingIcon>
        </div>
        <p className='font-HeroNewBold leading-6'>{title}</p>
        <p className='font-light leading-6 text-tertiary-400 px-9 lg:px-0 promotionbanner-des text-center'>{description}</p>
      </div>
    </>
  )
}