import React from 'react'
import './sunmenuitem.styles.scss'
interface SubMenuItemProp {
  className?: string
  children: React.ReactNode,
  onClick: (name: string) => void
}
export const SubMenuItem: React.FC<SubMenuItemProp> = ({ children, className, onClick }) => {
  return (
    <li onClick={() => {
      onClick(children as string)
    }} className={`subMenuItem hover:text-appTheme pl-[9px] py-2 cursor-pointer hover:underline font-HeroNewLight ${className}`}>
      {children}
    </li>
  )
}