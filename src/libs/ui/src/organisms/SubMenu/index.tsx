import { SubMenuItem } from '@ui/atoms/SubMenuItem';
import { SubMenuConatiner } from '@ui/molecules/SubMenuContainer';
import { HeaderNavigationItem } from '@utils/interfaces';

interface SubMenuProps {
    options: HeaderNavigationItem[]
    className?: string
}
export const SubMenu: React.FC<SubMenuProps> = ({ options, className }) => {
  return (
    <div className={`flex pl-appPaddingLeft pr-appPaddingRight py-8 ${className}`}>
      {options.map((option) => {
        return (
          <div className="flex-1" key={option?.title}>
            {option.title && <ul><SubMenuItem className="font-bold !font-HeroNewBold hover:text-black hover:no-underline">{option.title}</SubMenuItem></ul>}
            <SubMenuConatiner options={option.items}></SubMenuConatiner>
            {option.hasMore && <ul><SubMenuItem className="font-bold !font-HeroNewBold text-[rgb(18,92,224)]">{'View All'}</SubMenuItem></ul>}
          </div>
        )
      })}
    </div>
  )
}