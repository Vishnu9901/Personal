import { ReactNode } from 'react';


interface HeaderNavigationItem {
    children: ReactNode;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    onClick?: (name: any) => void
}

export const HeaderNavigationItem: React.FC<HeaderNavigationItem> = ({ children, onClick = () => { console.log('clicked') } }) => {
  return (
    <li onClick={() => {
      onClick(children)
    }} className="headerNavigation-item hover:underline hover:underline-offset-1 flex items-center justify-center font-HeroNewRegular text-tertiary-400 py-3 px-4 font-normal"
    >{children}
    </li>
  )

}