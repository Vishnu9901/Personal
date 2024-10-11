import { ReactNode } from 'react';


interface HeaderNavigationItem {
  children: ReactNode;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClick?: (name: any) => void,
  onMouseEnter?: (name: any) => void;
  onMouseLeave?: (name: any) => void;
}

export const HeaderNavigationItem: React.FC<HeaderNavigationItem> = ({
  children,
  onClick = () => { console.log('clicked') },
  onMouseEnter = () => { console.log('MouseEnter') },
  onMouseLeave = () => { console.log('MouseLeave') },
}) => {
  return (
    <li onClick={() => {
      onClick(children)
    }}
    onMouseEnter={() => {
      onMouseEnter(children)
    }}
    onMouseLeave={() => {
      onMouseLeave(children)
    }}
    className="headerNavigation-item hover:underline hover:underline-offset-1 flex items-center justify-center font-HeroNewRegular text-tertiary-400 py-3 px-4 font-normal"
    >{children}
    </li>
  )

}