import { ReactNode } from 'react'

interface FooterAnchor {
    className?: string,
    children: ReactNode
}

export const FooterAnchor: React.FC<FooterAnchor> = ({ children, className = '' }) => {
  return <a href='#' className={`hover:text-brand-white-100 font-light text-base group-hover:underline  group-hover:underline-offset-1 ${className}`}>{children}</a>
}