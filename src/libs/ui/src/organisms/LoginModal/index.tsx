import Modal from "@ui/molecules/Modal"
import ModalHeader from "@ui/molecules/ModalHeader"
import LoginForm from "../LoginForm"
import { useState } from "react";
import ForgotPasswordForm from "../ForgotPasswordForm";

enum LoginModalConstant {
    Login = 'login',
    ForgotPassword = 'ForgotPassword',
    AlreadyRegistered = 'alreadyRegistered'
}
interface LoginModalProps {
    close: () => void,
}
export const LoginModal: React.FC<LoginModalProps> = ({ close }) => {
    const [currentForm, setCurrentForm] = useState<LoginModalConstant.Login | LoginModalConstant.ForgotPassword | LoginModalConstant.AlreadyRegistered>(LoginModalConstant.Login);
    const onSubmit = () => {
        console.log('Login')
    }
    const forgotPassword = () => {
        console.log('forgotpassword');
        setCurrentForm(LoginModalConstant.ForgotPassword)
    }
    return (
        <>
            <Modal>
                <ModalHeader onClose={close}></ModalHeader>
                {currentForm === LoginModalConstant.Login && <LoginForm onSubmit={onSubmit} forgotPassword={forgotPassword}></LoginForm>}
                {currentForm === LoginModalConstant.ForgotPassword && <ForgotPasswordForm onSubmit={onSubmit} logiModal={()=> setCurrentForm(LoginModalConstant.Login)}></ForgotPasswordForm>}
                {currentForm === LoginModalConstant.AlreadyRegistered && <ForgotPasswordForm onSubmit={onSubmit} logiModal={()=> setCurrentForm(LoginModalConstant.Login)}></ForgotPasswordForm>}
            </Modal>
        </>
    )
}