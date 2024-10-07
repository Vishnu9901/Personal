import React from "react"
import { FooterLink } from "@ui/molecules/FooterLink"
import { FooterAnchor } from "@ui/atoms/Link"


interface FooterLinks {
    options: {
        label: string,
        url: string
    }[],
}
export const FooterLinks: React.FC<FooterLinks> = ({ options }) => {

    return <ul>
        {
            options.map((link) => (<FooterLink className={''}
            ><FooterAnchor>{link.label}</FooterAnchor>
            </FooterLink>)
            )
        }
    </ul>
}