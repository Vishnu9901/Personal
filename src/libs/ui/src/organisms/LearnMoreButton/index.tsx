import { SecondaryButton } from '@ui/molecules/ScecondaryButton'
import './learnMoreButton.styles.scss'
import { Variants } from '@utils/enums';
import RightArrow from '@ui/atoms/SvgAtoms/RightArrow';

interface LearnMoreProps {
  onClick: () => void
  variant?: Variants
  className?: string
  iconSize?: string
  showIcon?: boolean,
  title?: string
}

export const LearnMore: React.FC<LearnMoreProps> = ({ onClick, variant = Variants.Primary, className = '', iconSize = '', showIcon = true, title = "Learn More" }) => {

  return (
    <>
      <SecondaryButton
        onClick={onClick}
        className={`learnMorebutton group ${variant === Variants.Primary ? '!bg-appTheme !text-white' : '!text-appTheme'} ${className}`}
      >
        {title}
        {showIcon && <div className="ml-2 flex items-center">
          <div className='block group-hover:hidden'>
            {variant === Variants.Primary && <RightArrow fillColor="rgb(var(--app-White)" width={15} height={15}></RightArrow>}
            {variant === Variants.Secondary && <RightArrow fillColor="rgb(var(--primary-color))" width={15} height={15}></RightArrow>}
          </div>
          <div className='hidden group-hover:block'>
            <RightArrow fillColor="rgb(var(--app-White)" width={15} height={15}></RightArrow>
          </div>

        </div>}
      </SecondaryButton>
    </>
  )
}