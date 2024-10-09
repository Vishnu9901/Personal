import { ReactNode } from 'react'

interface FooterTitleProps {
    children: ReactNode,
    className?: string
}
export const FooterTitle: React.FC<FooterTitleProps> = ({ children, className }) => {
  return <p className={`font-HeroNewBold text-base leading-6 tracking-[0.02rem] ${className}`}>{children}</p>
}