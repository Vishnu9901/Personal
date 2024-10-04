import { Image } from '../../atoms/Image';
import './header.styles.scss';
import logo from '../../../assets/Logo.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import profile from '../../../assets/profile.svg';
import cart from '../../../assets/cart.svg'
import { TopHeader } from '../TopHeader';
import { NavigationContainer } from '../../molecules/HeaderNavigationContainer';
import sell from '../../../assets/sell.svg';
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
                <div className="container grid headerContainer pl-appPaddingLeft pr-appPaddingRight items-center">
                    <div className=''> <Image src={logo} alt='logo'></Image></div>
                    <div className='text-center'>
                        <NavigationContainer></NavigationContainer>
                    </div>
                    <div className='flex justify-end gap-8'>
                        <div className='headerContainer-icon '>
                            <Image src={searchIcon} alt='searchIcon'></Image>
                        </div>
                        <div className='headerContainer-icon'>
                            <Image src={profile} alt='profile'></Image>
                        </div>
                        <div className='headerContainer-icon'>
                            <Image src={cart} alt='cart'></Image>
                        </div>
                    </div>
                </div>
            </header>

        </div>

    )
}