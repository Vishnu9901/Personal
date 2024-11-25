
import { Image } from '@ui/atoms/Image';
import logo from '../../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface HeaderLogoProps {
  className?:string
}
export const HeaderLogo:React.FC<HeaderLogoProps> =({className}) =>{
  const navigate = useNavigate()
  return  <Image src={logo} alt='logo' onClick={()=>{
    console.log('Header Logo clicked')
    navigate('')
  }} className={`tl:scale-x-[1] scale-x-[1.5] scale-y-[1.3] tl:scale-y-[1.09]  max-w-[63.75em]  lg:w-[145px] w-24 ${className}`}   />
}