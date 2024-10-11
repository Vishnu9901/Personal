import React from 'react'
import { Heading } from '@ui/atoms/Heading';
import { SubHeading } from '@ui/atoms/SubHeading';
import { Button } from '@ui/atoms/Button';

interface SlideContentProps {
  title: string,
  subTitle: string
  btnText?: string
  onClick?: () => void
}

export const SlideContent: React.FC<SlideContentProps> = ({
  title,
  subTitle,
  btnText = 'Learn More',
  onClick
}) => {
  return (
    <>
      <Heading className="text-primary-400 font-bold tracking-normal lg:text-brand-white-100 mb-4 leading-[1] text-3xl lg:text-[3rem]">{title}</Heading>
      <SubHeading classNames="text-base font-semibold lg:text-brand-white-100 mb-6 lg:mb-10 leading-[1.5rem] font-HeroNewRegular">{subTitle}</SubHeading>
      <Button 
        id="promotion-btn"
        type='button'
        className='h-11 text-base w-34 font-HeroNewBold rounded-none bg-appTheme hover:text-secondary-400 hover:bg-secondary-400 hover:bg-gray-400 text-white lg:text-[#125ce0] lg:bg-white py-2.5 px-6 lg:hover:bg-appTheme lg:hover:text-white'
        onClick={onClick}
        aria-label='promotion button'>
        {btnText}
      </Button>
    </>
  )
} 