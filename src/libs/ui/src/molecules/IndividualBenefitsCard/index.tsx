import { Image } from '@ui/atoms/Image'

export interface IndividualBenefitsCardProps {
  imageSrc: string,
  title: string,
  description: string
  imageAlt: string
}

export const IndividualBenefitsCard: React.FC<IndividualBenefitsCardProps> = ({
  imageSrc, title, description, imageAlt = ''
}) => {
  return (
    <>
      <div className='mx-auto flex flex-col items-center'>
        <div className='relative mx-auto mb-5'>
          <Image src={imageSrc}
            alt={imageAlt}
            loading='lazy'
            className='w-full h-full'
          >
          </Image>
        </div>
        <p className='font-HeroNewBold leading-6'>{title}</p>
        <p className='font-light leading-6 text-tertiary-400 px-9 lg:px-0 promotionbanner-des text-center'>{description}</p>
      </div>
    </>
  )
}