import { Image } from '@ui/atoms/Image'
import PCA_LOGO from '../../../assets/appSvgs/PCA_LOGO.svg';
import { APPOWNER } from '@utils/constants';
export const FooterLogoSection = () => {
  return (
    <>
      <div className='lg:flex py-8 items-center hidden '>
        <Image src={PCA_LOGO} alt={''} className=''></Image>
        <p className='text-base ml-9'>{APPOWNER}</p>
      </div>
      <div className='flex flex-col py-8 lg:hidden'>
        <Image src={PCA_LOGO} alt={''} className='w-footerlogoWidth h-footerlogoHeight'></Image>
        <p className='text-sm text-white mt-5'>{APPOWNER}</p>
      </div>
    </>
  )
}