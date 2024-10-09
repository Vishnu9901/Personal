import { Image } from '@ui/atoms/Image';
import { TopHeader } from '@ui/organisms/TopHeader';
import { Button } from '@ui/atoms/Button';
import { NavigationContainer } from '@ui/molecules/HeaderNavigationContainer';
import './header.styles.scss';
import logo from '../../../assets/Logo.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import profile from '../../../assets/profile.svg';
import cart from '../../../assets/cart-wheels.svg'
import sell from '../../../assets/sell.svg';
import hambargar from '../../../assets/Hambargar.svg';
import { useEffect, useRef, useState } from 'react';
import { SubMenu } from '../SubMenu';
import { links } from '@utils/constants';
import { MobileSubMenu } from '../HeaderMobileSubMenu';

export const Header = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const isFirstRender = useRef(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [toggleMobileSubMenu, SettoggleMobileSubMenu] = useState(false)

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [subMenu, SetSubMenu] = useState<any>([])

  const handleScroll = () => {
    setIsFixed(window.scrollY > import.meta.env.VITE_SCROLL_TOP_HEADER_HEIGHT);
  };


  const mouseEnter = (title: string) => {
    const subMenuOptions = links.filter((option) => option.title.toLocaleLowerCase() === title.toLocaleLowerCase());
    SetSubMenu(subMenuOptions[0].submenu)
    setShowSubMenu(true);
  }

  const mouseLeave = () => {
    console.log('mouseLeave')
  }

  const subMenuEnter = () => {
    console.log('subMenuEnter')
  }
  const subMenuLeave = () => {
    console.log('subMenuLeave');
    setShowSubMenu(false);
  }

  const openMobileSubMenu = () => {
    SettoggleMobileSubMenu(!toggleMobileSubMenu)
  }

  useEffect(() => {

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  return (
    <div>
      <TopHeader>
        <div className='flex'>
          <img src={sell} alt="sell Logo" className="w-[18px] h-[18px] mr-3" />
          <p>Spend $1200 and receive 10 PCA SKIN Holiday Bags + Free Shipping</p>
        </div>
      </TopHeader>

      <div className={`bg-white relative w-full z-50  ${isFixed ? 'header-fixed' : ''}`}>
        <header className={'shadow-bottom '}>
          <div className="container pl-6 pr-6 headerContainer lg:pl-appPaddingLeft lg:pr-appPaddingRight items-center">
            <div className='p-4 max-xsm:p-3' onMouseEnter={subMenuLeave}>
              <Image src={logo} alt='logo' className='lg:flex hidden' ></Image>
              <Button className='lg:hidden flex' onClick={openMobileSubMenu}>
                <Image src={hambargar} alt="hambargar"></Image>
              </Button>
            </div>

            <div className='hidden lg:text-center lg:flex '>
              <NavigationContainer
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}>
              </NavigationContainer>
            </div>

            <div className='hidden lg:flex justify-end lg:gap-8' onMouseEnter={subMenuLeave}>
              <Button className='headerContainer-icon max-xsm:p-1'>
                <Image src={searchIcon} alt='searchIcon'></Image>
              </Button>
              <Button className='headerContainer-icon lg:flex hidden'>
                <Image src={profile} alt='profile'></Image>
              </Button>
              <Button className='headerContainer-icon max-xsm:p-1'>
                <Image src={cart} alt='cart'></Image>
              </Button>
            </div>
            <div className='lg:hidden flex justify-end lg:gap-8'>
              <Image src={logo} alt='logo' className='lg:hidden flex'></Image>
              <div className='flex'>
                <Button className='headerContainer-icon max-xsm:p-1'>
                  <Image src={searchIcon} alt='searchIcon'></Image>
                </Button>
                <Button className='headerContainer-icon max-xsm:p-1'>
                  <Image src={cart} alt='cart'></Image>
                </Button>
              </div>
            </div>
          </div>
        </header>
        {showSubMenu && <div className=' hidden lg:block absolute w-full bg-white top-20'>
          <SubMenu options={subMenu}
            className='shadow-bottom'
            onMouseEnter={subMenuEnter}
            onMouseLeave={subMenuLeave}
          >
          </SubMenu>
        </div>}

        {/* Mobile Submenu */}
        {toggleMobileSubMenu && <>
          <MobileSubMenu options={links} goBack={() => {
            SettoggleMobileSubMenu(!toggleMobileSubMenu)
          }}>
          </MobileSubMenu>
        </>}

      </div>
    </div>

  )
}