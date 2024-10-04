import { Image } from '../../atoms/Image';
import './header.styles.scss';
import logo from '../../../assets/Logo.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import profile from '../../../assets/profile.svg';
import cart from '../../../assets/cart.svg'
import { TopHeader } from '../TopHeader';
import { NavigationContainer } from '../../molecules/HeaderNavigationContainer';
import sell from '../../../assets/sell.svg';
import hambargar from '../../../assets/Hambargar.svg';
import { Button } from '../../atoms/Button';
export const Header = () => {
    return (
        <div>
            <TopHeader>
                <div className='flex'>
                    <img src={sell} alt="sell Logo" className="w-[18px] h-[18px] mr-3" />
                    <p>Spend $1200 and receive 10 PCA SKIN Holiday Bags + Free Shipping</p>
                </div>
            </TopHeader>
            <header className='shadow-bottom'>
                <div className="container grid pl-6 pr-6 headerContainer lg:pl-appPaddingLeft lg:pr-appPaddingRight items-center">
                    <div className='p-4 max-xsm:p-3'>
                        <Image src={logo} alt='logo' className='lg:flex hidden'></Image>
                        <Button className='lg:hidden flex'>
                            <Image src={hambargar} alt="hambargar"></Image>
                        </Button>
                    </div>

                    <div className='hidden lg:text-center lg:flex '>
                        <NavigationContainer></NavigationContainer>
                    </div>

                    <div className='flex justify-end  lg:gap-8'>
                        <Image src={logo} alt='logo' className='lg:hidden flex'></Image>
                        <div className='flex'>
                            <button className='headerContainer-icon max-xsm:p-1'>
                                <Image src={searchIcon} alt='searchIcon'></Image>
                            </button>
                            <button className='headerContainer-icon lg:flex hidden'>
                                <Image src={profile} alt='profile'></Image>
                            </button>
                            <button className='headerContainer-icon max-xsm:p-1'>
                                <Image src={cart} alt='cart'></Image>
                            </button>
                        </div>

                    </div>
                </div>
            </header>

        </div>

    )
}