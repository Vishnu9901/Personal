import Modal from "@ui/molecules/Modal"
import ModalHeader from "@ui/molecules/ModalHeader"
import LoginForm from "../LoginForm"


interface LoginModalProps {
    close: () => void,
}
export const LoginModal: React.FC<LoginModalProps> = ({ close }) => {
    const onSubmit = () => {
        console.log('Login')
    }
    const forgotPassword = () =>{
        console.log('forgotpassword')
    }
    return (
        <>
            <Modal>
                <ModalHeader onClose={close}></ModalHeader>
                <LoginForm onSubmit={onSubmit} forgotPassword={forgotPassword}></LoginForm>
            </Modal>
        </>
    )
}