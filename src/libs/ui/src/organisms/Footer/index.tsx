import { shop, Learn, About, CustomerService, SHOP_D, LEARN, ABOUT, CUSTOMER_SERVICE, OtherLinks, APPOWNER } from "../../../../utils/constants"
import { Image } from "../../atoms/Image";
import { FooterLinks } from "../../molecules/FooterLinks"
import { FooterOtherLinks } from "../../molecules/FooterOtherLinks";
import { FooterTitle } from "../../molecules/FooterTitle";
import './footer.styles.scss'
import PCA_LOGO from '../../../assets/appSvgs/PCA_LOGO.svg';

export const Footer = () => {
    return (
        <div className="footer bg-black">
            <div className="container pl-appPaddingLeft pr-appPaddingRight">
                <footer>
                    <div className="grid grid-cols-4  bg-black text-white pt-14">
                        <div>
                            <FooterTitle className="pl-2 pb-4">{SHOP_D}</FooterTitle>
                            <FooterLinks options={shop}></FooterLinks>
                        </div>
                        <div>
                            <FooterTitle className="pl-2 pb-4">{LEARN}</FooterTitle>
                            <FooterLinks options={Learn}></FooterLinks>
                        </div>
                        <div>
                            <FooterTitle className="pl-2 pb-4">{ABOUT}</FooterTitle>
                            <FooterLinks options={About}></FooterLinks>
                        </div>
                        <div>
                            <FooterTitle className="pl-2 pb-4">{CUSTOMER_SERVICE}</FooterTitle>
                            <FooterLinks options={CustomerService}></FooterLinks>
                        </div>
                        <div className="col-span-4 pt-8">
                            <FooterOtherLinks options={OtherLinks} ></FooterOtherLinks>
                            <div className='flex  py-8 items-center'>
                                <Image src={PCA_LOGO} alt={''} className=''></Image>
                                <p className='text-base ml-9'>{APPOWNER}</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}