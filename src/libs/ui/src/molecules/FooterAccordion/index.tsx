import React from "react"
import { shop, SHOP_D } from "../../../../utils/constants"
import { FooterAnchor } from "../../atoms/Link"
import Accordion from "../Accordion"
import { FooterLink } from "../FooterLink"

interface FooterAccordion {
    title: string,
    options: {
        label: string,
        url: string
    }[]

}

export const FooterAccordion: React.FC<FooterAccordion> = ({ title, options }) => {
    return (
        <>
            <Accordion title={title} containerClassName="footer-accordion border-b-[0.0625rem]"
                contentClassName="bg-black pb-1"
                className="pl-0"
                titleClassName="text-base font-bold pr-4 text-brand-white-100 font-HeroNewBold">
                {
                    <ul>
                        {options.map((link) => (<FooterLink className="-ml-3"
                        ><FooterAnchor>{link.label}</FooterAnchor>
                        </FooterLink>)
                        )}
                    </ul>

                }
            </Accordion></>
    )
}