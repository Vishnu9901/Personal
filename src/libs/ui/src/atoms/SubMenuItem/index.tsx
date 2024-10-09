import React from 'react'
import './sunmenuitem.styles.scss'
interface SubMenuItemProp {
    className?: string
    children: React.ReactNode
}
export const SubMenuItem: React.FC<SubMenuItemProp> = ({ children, className }) => {
  return (
    <li className={`subMenuItem hover:text-blue-600 pl-[9px] py-2 cursor-pointer hover:underline font-HeroNewLight ${className}`}>
      {children}
    </li>
  )
}