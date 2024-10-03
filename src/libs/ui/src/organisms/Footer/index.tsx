import { shop, Learn, About, CustomerService, SHOP_D, LEARN, ABOUT, CUSTOMER_SERVICE, OtherLinks, APPOWNER } from "../../../../utils/constants"
import { Image } from "../../atoms/Image";
import { FooterOtherLinks } from "../../molecules/FooterOtherLinks";
import './footer.styles.scss'
import PCA_LOGO from '../../../assets/appSvgs/PCA_LOGO.svg';
import { FooterSection } from "../../molecules/FooterSetion";
import { FooterAccordion } from "../../molecules/FooterAccordion";
import { FooterLogoSection } from "../../molecules/FooterLogoSection";

export const Footer = () => {
    return (
        <div className="footer bg-black">
            <div className="container px-6 lg:pl-appPaddingLeft lg:pr-appPaddingRight">
                <footer>
                    <div className="hidden lg:grid grid-cols-4  bg-black text-white pt-14">
                        <FooterSection title={SHOP_D} options={shop}></FooterSection>
                        <FooterSection title={LEARN} options={Learn}></FooterSection>
                        <FooterSection title={ABOUT} options={About}></FooterSection>
                        <FooterSection title={CUSTOMER_SERVICE} options={CustomerService}></FooterSection>
                        <div className="col-span-4 pt-8">
                            <FooterOtherLinks options={OtherLinks} ></FooterOtherLinks>
                            <FooterLogoSection></FooterLogoSection>
                        </div>
                    </div>
                    <div className="grid lg:hidden">
                        <FooterAccordion title={SHOP_D} options={shop}></FooterAccordion>
                        <FooterAccordion title={LEARN} options={Learn}></FooterAccordion>
                        <FooterAccordion title={ABOUT} options={About}></FooterAccordion>
                        <FooterAccordion title={CUSTOMER_SERVICE} options={CustomerService}></FooterAccordion>
                        <FooterLogoSection></FooterLogoSection>
                    </div>
                </footer>
            </div>
        </div>
    )
}