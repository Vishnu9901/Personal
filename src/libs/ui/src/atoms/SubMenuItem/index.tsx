import React from 'react'

interface SubMenuItemProp {
    className?: string
    children: React.ReactNode
}
export const SubMenuItem: React.FC<SubMenuItemProp> = ({ children, className }) => {
  return (
    <li className={`hover:bg-blue-200 hover:text-blue-600 pl-[9px] py-2 cursor-pointer hover:underline font-HeroNewLight ${className}`}>
      {children}
    </li>
  )
}