import { ReactNode } from "react"
import './footerlink.styles.scss'
import { ClassNames } from "../../../../utils/interfaces"
interface FooterLinkProps {
    children: ReactNode,
    className: string
}
export const FooterLink: React.FC<FooterLinkProps> = ({ children, className }) => {
    return (
        <li className={`mb-2 px-2 py-2 footerlink group ${className}`}>
          {children} 
        </li>
    )
}