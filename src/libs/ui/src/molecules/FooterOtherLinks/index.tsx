import React from "react"
import { FooterLink } from "@ui/molecules/FooterLink"
import { FooterAnchor } from "@ui/atoms/Link"


interface FooterLinks {
    options: {
        label: string,
        url: string
    }[],
}
export const FooterOtherLinks: React.FC<FooterLinks> = ({ options }) => {

    return <ul className="flex">
        {
            options.map((link) => (<FooterLink className={'-ml-4 !px-4'}
            ><FooterAnchor className="text-sm">{link.label}</FooterAnchor>
            </FooterLink>)
            )
        }
    </ul>
}