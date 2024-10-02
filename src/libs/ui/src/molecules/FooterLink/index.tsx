import { ReactNode } from "react"

interface FooterLinkProps {
    children: ReactNode
}
export const FooterLink: React.FC<FooterLinkProps> = ({ children }) => {
    return (
        <li>{children}</li>
    )
}