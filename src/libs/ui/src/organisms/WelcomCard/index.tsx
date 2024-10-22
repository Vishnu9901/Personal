import { CreateAccountButton } from "@ui/molecules/CreateAccountBtn"
import AlreadyRegistered from "../AlreadyRegisteredForm"
import ForgotPasswordForm from "../ForgotPasswordForm"
import { useState } from "react";
import { LoginModalConstant } from "@utils/enums";

export const WelcomeCard = () => {
    const [currentForm, setCurrentForm] = useState<LoginModalConstant>(LoginModalConstant.AlreadyRegistered);
    const onSubmit = () => {
        console.log('Login')
    }
    const forgotPassword = (modalName:LoginModalConstant) => {
        setCurrentForm(modalName)
    }
    return (<>
        <div className="container flex flex-col md:flex-row px-6 lg:pl-appPaddingLeft lg:pr-appPaddingRight mx-auto pt-12 pb-8 gap-8 justify-center items-center divide-y divide-neutral-300 lg:divide-y-0">
            <div className="basis-1/2">
                <h1 className="text-black text-[24px] font-normal font-HeroNewRegular">Welcome to the PCA SKIN Professional Site</h1>
                <p className="text-[14px] text-secondary-400 mt-2 mb-6">If you have a professional account, please login. If you would like to establish a professional account please click Create Account.  </p>
                <CreateAccountButton className="font-HeroNewBold">Create Account</CreateAccountButton>
            </div>
            <div className="basis-1/2 pt-6 lg:pt-0">
                {currentForm === LoginModalConstant.ForgotPassword && <ForgotPasswordForm headClassname="text-[24px]" onSubmit={onSubmit} loginModal={()=>{forgotPassword(LoginModalConstant.AlreadyRegistered)}}></ForgotPasswordForm>}
                {currentForm === LoginModalConstant.AlreadyRegistered && <AlreadyRegistered onSubmit={onSubmit} loginModal={()=>{forgotPassword(LoginModalConstant.ForgotPassword)}}></AlreadyRegistered>}
            </div>
        </div>
    </>)
}