import { CreateAccountButton } from '@ui/molecules/CreateAccountBtn'
import Popover from '../Popover'
import { MouseEventHandler } from 'react';

export const LoginPopoverConstants = {
  Login: 'Login',
  CreateAcount: 'Create Account '
}

interface LoginPopoverProps {
    className?: string,
    onClick: (name: string) => void
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
}
export const LoginPopover: React.FC<LoginPopoverProps> = ({
  className = '',
  onClick = () => console.log('clicked'),
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div onMouseEnter={(e: any) => {
      if (onMouseEnter) {
        onMouseEnter(e)
      }

    }}
    onMouseLeave={(e: any) => {
      if (onMouseLeave) {
        onMouseLeave(e)
      }

    }}
    >
      <Popover className={`w-[390px] boxshadow shadow-md p-5 px-7 ${className}`}>
        <h2 className='text-tertiary-400 font-bold text-base tracking-normal leading-24 w-full mt-6 font-HeroNewBold'>
                    If you have a professional account, please login. If you would like to establish a professional account please click Create Account.
        </h2>
        <div className='flex py-4 gap-4 justify-between'>
          <CreateAccountButton className='w-[90%] font-HeroNewBold text-sm h-12' onClick={() => { onClick(LoginPopoverConstants.Login) }}>{LoginPopoverConstants.Login}</CreateAccountButton>
          <CreateAccountButton className='w-[90%] font-HeroNewBold text-sm h-12' onClick={() => { onClick(LoginPopoverConstants.CreateAcount) }}>{LoginPopoverConstants.CreateAcount}</CreateAccountButton>
        </div>
      </Popover>
    </div>
  )
}