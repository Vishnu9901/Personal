import { Button } from '@ui/atoms/Button';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import ArrowPrevIcon from '@ui/atoms/SvgAtoms/ArrowPrevIcon';
import ArrowNextIcon from '@ui/atoms/SvgAtoms/ArrowNextIcon';

interface PopularProductsHeaderProps {
  title: string,
  description?: string,
  handleScroll: (direction: string) => void
  showDescription?: boolean
  disableLeftButton: boolean,
  disableRightButton: boolean
}
export const PopularProductsHeader: React.FC<PopularProductsHeaderProps> = ({ title, description = '', handleScroll, showDescription = true, disableLeftButton, disableRightButton }) => {
  return (
    <>
      <div>
        <h2 className="font-bold text-xl lg:text-[1.75rem] text-[#555555] font-HeroNewExtraBold leading-8 hover:font-HeroNewBold">
          {title}
        </h2>
        <div className={`mb-6 flex flex-col lg:flex-row lg:justify-between ${showDescription ? '' : '!justify-end'}`}>
          {showDescription && <div className="flex flex-col lg:flex-row items-start mt-4">
            <p className="mr-6 text-base text-slate-600 font-HeroNewLight">
              {description}
            </p>
            <Button
              id="login-view-price-btn"
              className="text-base font-bold text-appTheme hover:text-white hover:bg-appTheme font-HeroNewBold"
              type="submit"
              aria-label='login view price button'
            >
              Log in to view prices
            </Button>
          </div>}

          <div className="flex space-x-0.5 mt-3 lg:mt-0 justify-end">

            <PrimaryButton
              className={`w-11 h-12 relative overflow-hidden !p-0 ${disableLeftButton ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              onClick={() => handleScroll('left')}
              disabled={disableLeftButton}
            >
              <div
                className={`absolute inset-0 ${disableLeftButton ? '' : 'opacity-100 hover:opacity-0'
                  } transition-opacity duration-100`}
              >
                <ArrowPrevIcon />
              </div>
              <div
                className={`absolute inset-0 ${disableLeftButton ? '' : 'opacity-0 hover:opacity-100'
                  } transition-opacity duration-100`}
              >
                <ArrowPrevIcon fillColor="var(--hover-icon-color)" />
              </div>
            </PrimaryButton>

            {/* Right Navigation Button */}
            <PrimaryButton
              className={`w-11 h-12 relative overflow-hidden !p-0 ${disableRightButton ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              onClick={() => handleScroll('right')}
              disabled={disableRightButton}
            >
              <div
                className={`absolute inset-0 ${disableRightButton ? '' : 'opacity-100 hover:opacity-0'
                  } transition-opacity duration-100`}
              >
                <ArrowNextIcon />
              </div>
              <div
                className={`absolute inset-0 ${disableRightButton ? '' : 'opacity-0 hover:opacity-100'
                  } transition-opacity duration-100`}
              >
                <ArrowNextIcon fillColor="var(--hover-icon-color)" />
              </div>
            </PrimaryButton>
          </div>

        </div>
      </div>
    </>
  )
}