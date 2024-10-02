import { shop, Learn, About, CustomerService, SHOP_D, LEARN, ABOUT, CUSTOMER_SERVICE } from "../../../../utils/constants"
import { FooterLinks } from "../../molecules/FooterLinks"
import { FooterTitle } from "../../molecules/FooterTitle";
import './footer.styles.scss'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <footer>
                    <div className="grid grid-cols-4 grid-rows-2 bg-black text-white">
                        <div>
                            <FooterTitle className="">{SHOP_D}</FooterTitle>
                            <FooterLinks options={shop}></FooterLinks>
                        </div>
                        <div>
                            <FooterTitle className="">{LEARN}</FooterTitle>
                            <FooterLinks options={Learn}></FooterLinks>
                        </div>
                        <div>
                            <FooterTitle className="">{ABOUT}</FooterTitle>
                            <FooterLinks options={About}></FooterLinks>
                        </div>
                        <div>
                            <FooterTitle className="">{CUSTOMER_SERVICE}</FooterTitle>
                            <FooterLinks options={CustomerService}></FooterLinks>
                        </div>
                        <div>Logo Block</div>
                    </div>
                </footer>
            </div>
        </div>
    )
}