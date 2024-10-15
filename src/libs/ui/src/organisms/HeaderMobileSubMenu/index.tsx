import { Image } from '@ui/atoms/Image';
import back from '../../../assets/straightArrow.svg';
import forwardArrow from '../../../assets/blue_next.svg'
import { useState } from 'react';
import './headerMobileSubMenu.styles.scss'

interface SubMenuProps {
    options: any,
    goBack?: () => void
}

export const MobileSubMenu: React.FC<SubMenuProps> = ({ options, goBack }) => {
  const [showBackOption, setShowBackOption] = useState(false);
  const [subMenu, SetSubMenu] = useState([])
  const [catagory, setCatagory] = useState('')
  const openSubCatagory = (name: string) => {
    if (!showBackOption) {
      const subMenuOptions = options.filter((option: { title: string }) => option.title.toLocaleLowerCase() === name.toLocaleLowerCase());
      SetSubMenu(subMenuOptions[0].submenu);
      setCatagory(name);
    }
    setShowBackOption(!showBackOption)
  }

  return (<div className="relative h-screen mobileMenu bg-tertiary-100 lg:hidden" >
    <div
      className={'fixed top-0 left-0 h-full overflow-y-scroll w-full bg-white shadow-lg z-50 transform translate-x-0 transition-transform duration-300 ease-in-out'}>
      <div className='p-6'>
        <div className={`flex ${showBackOption ? 'justify-between' : ' justify-end'}`}>
          {showBackOption && <div onClick={() => {
            openSubCatagory('back')
          }}>
            <Image src={back} alt='back' className='cursor-pointer'></Image>
                             </div>}
          {showBackOption && <h3 className="heading text-tertiary-400 font-bold text-l text-xl tracking-normal leading-none font-HeroNewBold">{catagory}</h3>}
          <div onClick={goBack} className="close h-6 w-6"></div>
        </div>
        <div className={` ${showBackOption ? '' : 'py-6'}`}>
          {!showBackOption && (
            <ul>
              {options.map((link: { title: string, label: string }) => {
                return (
                  <li className='title font-HeroNewRegular cursor-pointer group text-tertiary-400 flex justify-between items-center'
                    key={link.title}
                    onClick={() => {
                      openSubCatagory(link.title)
                    }}>
                    <p className='group-hover:underline'>{link.title}</p>
                    <div>
                      <Image src={forwardArrow} alt='forwardArrow' className='w-8 h-8'></Image>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
          {showBackOption &&
                        (<div className={'flex flex-col'}>
                          {subMenu.map((option: { title: string, label: string, items: [], hasMore: boolean }) => {
                            return (
                              <div className="flex-1 sub-cta" key={option?.title}>
                                {option.title && <p className='font-bold !font-HeroNewBold py-4'>{option.title}</p>}
                                <ul>
                                  {option.items.map((item) => {
                                    return <li className={' hover:text-blue-600 pl-[9px] py-3 cursor-pointer hover:underline font-HeroNewLight font-light'}>
                                      {item}
                                           </li>
                                  })}
                                </ul>
                                {option.hasMore && <ul><li className="font-bold pl-[9px] !font-HeroNewBold text-[rgb(18,92,224)] p-2 hover:underline">{'View All'}</li></ul>}
                              </div>
                            )
                          })}
                        </div>)}
        </div>
      </div>

      <div className='signOut h-full px-8 py-10 flex justify-between'>
        <div className='font-HeroNewRegular'>
          <span className='signOut-account h-6 w-6 inline-block'></span>
          <span className='pl-4 text-tertiary-400'>Sing In</span>
        </div>
        <div>
          <Image src={forwardArrow} alt='forwardArrow' className='w-8 h-8'></Image>
        </div>
      </div>
    </div>
          </div>)
}