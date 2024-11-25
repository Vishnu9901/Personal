import { SubMenuItem } from '@ui/atoms/SubMenuItem';
import { SubMenuConatiner } from '@ui/molecules/SubMenuContainer';
import { HeaderNavigationItem } from '@utils/interfaces';
import './submenu.styles.scss'
interface SubMenuProps {
  options: HeaderNavigationItem[]
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick: (name: string, title: string) => void
}
export const SubMenu: React.FC<SubMenuProps> = ({ options, className, onMouseEnter = () => console.log(''), onMouseLeave = () => console.log(''), onClick }) => {

  return (
    <div className={`flex pl-appPaddingLeft pr-appPaddingRight py-8 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {options.map((option) => {
        return (
          <div className="flex-1" key={option?.title}>
            {option.title && <ul><SubMenuItem onClick={(name) => {
              onClick(name, option?.title)
            }} className="font-bold !font-HeroNewBold !hover:text-black hover:no-underline submenu">{option.title}</SubMenuItem></ul>}
            <SubMenuConatiner onClick={(name) => {
              onClick(name, option?.title)
            }} options={option.items}></SubMenuConatiner>
            {option.hasMore && <ul><SubMenuItem onClick={(name) => {
              onClick(name, option?.title)
            }} className="font-bold !font-HeroNewBold text-appTheme">{'View All'}</SubMenuItem></ul>}
          </div>
        )
      })}
    </div>
  )
}