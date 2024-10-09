import { Button } from '@ui/atoms/Button';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import NavigateNextBlue from '../../../assets/Navigatenextblue.svg';
import NavigateNextBlueDark from '../../../assets/Navigate-next-bluedark.svg';
import NavigatePrevBlue from '../../../assets/Navigateprevblue.svg';
import NavigatePrevBlueDark from '../../../assets/Navigateprevbluedark.svg';

interface PopularProductsHeaderProps {
    title: string,
    description: string,
    handleScroll: (direction: string) => void

}
export const PopularProductsHeader: React.FC<PopularProductsHeaderProps> = ({ title, description, handleScroll }) => {
  return (
    <>
      <div>
        <h2 className="font-bold text-xl lg:text-[1.75rem] text-[#555555] font-HeroNewExtraBold leading-8 hover:font-HeroNewBold">
          {title}
        </h2>
        <div className="mb-6 flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col lg:flex-row items-start mt-4">
            <p className="mr-6 text-base text-slate-600 font-HeroNewLight">
              {description}
            </p>
            <Button
              className="text-base font-bold text-appTheme hover:text-white hover:bg-appTheme font-HeroNewBold"
              type="submit"
            >
                            Log in to view prices
            </Button>
          </div>

          <div className="flex space-x-0.5 mt-3 lg:mt-0">
            <PrimaryButton
              className="w-10 h-10 hover:bg-appTheme relative overflow-hidden !p-0"
              onClick={() => handleScroll('left')}
            >
              <img
                src={NavigatePrevBlue}
                alt="Navigate Prev"
                className="absolute inset-0 transition-opacity duration-100"
              />
              <img
                src={NavigatePrevBlueDark}
                alt="Navigate Prev Dark"
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-100"
              />
            </PrimaryButton>

            <PrimaryButton
              className="w-10 h-10 hover:bg-appTheme relative overflow-hidden !p-0"
              onClick={() => handleScroll('right')}
            >
              <img
                src={NavigateNextBlue}
                alt="Navigate Next"
                className="absolute inset-0 transition-opacity duration-100"
              />
              <img
                src={NavigateNextBlueDark}
                alt="Navigate Next Dark"
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-100"
              />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  )
}