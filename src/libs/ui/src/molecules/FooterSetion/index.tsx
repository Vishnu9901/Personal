import { FooterLinks } from "@ui/molecules/FooterLinks"
import { FooterTitle } from "@ui/molecules/FooterTitle";
interface FooterSetion {
    title: string,
    options: {
        label: string,
        url: string
    }[]
}

export const FooterSection: React.FC<FooterSetion> = ({ title, options }) => {
    return <>
        <div>
            <FooterTitle className="pl-2 pb-4">{title}</FooterTitle>
            <FooterLinks options={options}></FooterLinks>
        </div>
    </>
}