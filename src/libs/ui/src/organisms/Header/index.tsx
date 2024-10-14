import { Image } from '@ui/atoms/Image';
import { TopHeader } from '@ui/organisms/TopHeader';
import { Button } from '@ui/atoms/Button';
import { NavigationContainer } from '@ui/molecules/HeaderNavigationContainer';
import './header.styles.scss';
import logo from '../../../assets/Logo.svg';
import sell from '../../../assets/sell.svg';
import hambargar from '../../../assets/Hambargar.svg';
import { useEffect, useState } from 'react';
import { SubMenu } from '../SubMenu';
import { links } from '@utils/constants';
import { MobileSubMenu } from '../HeaderMobileSubMenu';
import { HeaderSearch } from '../HeaderSearch';
import { useNavigate } from 'react-router-dom';


interface HeaderProps {
  openLogin: () => void
}
export const Header: React.FC<HeaderProps> = ({ openLogin }) => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [toggleMobileSubMenu, SettoggleMobileSubMenu] = useState(false);
  const [toggleSearch, SetToggleSearch] = useState(false);
  const navigate = useNavigate()

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
  const closeSearchBar = () => {
    SetToggleSearch(false)
  }

  const navigateHome = () => {
    navigate('/');
  }
  useEffect(() => {

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
            <div onMouseEnter={subMenuLeave}>
              <div className='lg:h-[var(--navigation-logo-height-mobile)] lg:py-2' onClick={navigateHome}>
                <Image src={logo} alt='logo' className='lg:flex hidden h-full w-full' ></Image>
              </div>

              <Button id="menu" aria-label='hambargar-menu' className='lg:hidden flex' onClick={openMobileSubMenu}>
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
              <Button id="search-icon" aria-label='serch icon' className='headerContainer-icon search max-xsm:p-1' onClick={() => {
                SetToggleSearch(true)
              }}>
                <span className='search-icon w-6 h-6 bg-no-repeat'></span>
              </Button>
              <Button id="profile-icon" aria-label='profile icon' className='headerContainer-icon profile lg:flex hidden' onClick={openLogin}>
                <span className='profile-icon w-6 h-6 bg-no-repeat'></span>
              </Button>
              <Button id="cart-icon" aria-label='cart icon' className='headerContainer-icon cart max-xsm:p-1' onClick={openLogin}>
                <span className='cart-icon w-6 h-6 bg-no-repeat'></span>
              </Button>
            </div>
            <div className='lg:hidden flex justify-end lg:gap-8'>
              <div className='flex items-center h-[var(--navigation-logo-height-mobile)] py-2' onClick={navigateHome}>
                <Image src={logo} alt='logo' className='lg:hidden flex w-full h-full'></Image>
              </div>

              <div className='flex'>
                <Button id="search-icon" aria-label='search icon' className='headerContainer-icon search max-xsm:p-1' onClick={() => {
                  SetToggleSearch(true)
                }}>
                  <span className='search-icon w-6 h-6 bg-no-repeat'></span>
                </Button>
                <Button id="cart-icon" aria-label='cart icon' className='headerContainer-icon cart max-xsm:p-1' onClick={openLogin}>
                  <span className='cart-icon w-6 h-6 bg-no-repeat'></span>
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
        {toggleSearch && <HeaderSearch onClose={closeSearchBar}></HeaderSearch>}
      </div>
    </div>

  )
}