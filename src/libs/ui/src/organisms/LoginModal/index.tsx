import Modal from '@ui/molecules/Modal'
import ModalHeader from '@ui/molecules/ModalHeader'
import LoginForm from '../LoginForm'
import { useState } from 'react';
import ForgotPasswordForm from '../ForgotPasswordForm';
import AlreadyRegistered from '../AlreadyRegisteredForm';
import { LoginModalConstant } from '@utils/enums';
import ModalBody from '@ui/molecules/ModalBody';
import './loginModal.styles.scss'

interface LoginModalProps {
  close: () => void,
}
export const LoginModal: React.FC<LoginModalProps> = ({ close }) => {
  const [currentForm, setCurrentForm] = useState<LoginModalConstant.Login | LoginModalConstant.ForgotPassword | LoginModalConstant.AlreadyRegistered>(LoginModalConstant.Login);
  const onSubmit = () => {
    console.log('Login')
  }
  const forgotPassword = () => {
    setCurrentForm(LoginModalConstant.ForgotPassword)
  }
  return (
    <>
      <Modal className=''>
        <ModalHeader onClose={close} className='absolute right-4 top-2 p-[6px]'>
          <button
            onClick={close}
            className="p-2"
            aria-label="close_icon_title"
          >
            <span className="modal-Close"></span>
          </button>
        </ModalHeader>
        <ModalBody className='p-[40px] mt-[50px]'>
          {currentForm === LoginModalConstant.Login && <LoginForm onSubmit={onSubmit} forgotPassword={forgotPassword}></LoginForm>}
          {currentForm === LoginModalConstant.ForgotPassword && <ForgotPasswordForm titleClassName='mb-8' onSubmit={onSubmit} loginModal={() => setCurrentForm(LoginModalConstant.AlreadyRegistered)}></ForgotPasswordForm>}
          {currentForm === LoginModalConstant.AlreadyRegistered && <AlreadyRegistered onSubmit={onSubmit} loginModal={() => setCurrentForm(LoginModalConstant.ForgotPassword)}></AlreadyRegistered>}
        </ModalBody>
      </Modal>
    </>
  )
}