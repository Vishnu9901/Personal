import React from "react"
import { FooterLink } from "../FooterLink"

interface FooterLinks {
    options: {
        label: string,
        url: string
    }[]
}
export const FooterLinks: React.FC<FooterLinks> = ({ options }) => {
    return <ul>
        {
            options.map((link) => <FooterLink>{link.label}</FooterLink>
            )
        }
    </ul>
}