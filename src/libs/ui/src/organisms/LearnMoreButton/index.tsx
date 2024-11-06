import { SecondaryButton } from '@ui/molecules/ScecondaryButton'
import arrowIcon from '../../../assets/Arrow-right-blue.495910aa.svg';
import hoverArrowIcon from '../../../assets/Arrow-right.8d33ac71.svg'
import './learnMoreButton.styles.scss'
import { Variants } from '@utils/enums';

interface LearnMoreProps {
  onClick: () => void
  variant?: Variants
  className?: string
  iconSize?: string
  showIcon?: boolean,
  title?:string
}

export const LearnMore: React.FC<LearnMoreProps> = ({ onClick, variant = Variants.Primary, className = '', iconSize = '', showIcon = true, title="Learn More" }) => {

  return (
    <>
      <SecondaryButton
        onClick={onClick}
        className={`learnMorebutton group ${variant === Variants.Primary ? '!bg-appTheme !text-white' : '!text-appTheme'} ${className}`}
      >
        {title}
        {showIcon && <div className="ml-2 flex items-center">
          <img
            src={variant === Variants.Primary ? hoverArrowIcon : arrowIcon}
            alt="Arrow hover icon"
            className={`flex group-hover:hidden ${iconSize}`}
          />
          <img
            src={hoverArrowIcon}
            alt="Arrow hover icon"
            className={`hidden group-hover:flex ${iconSize}`}
          />
        </div>}
      </SecondaryButton>
    </>
  )
}