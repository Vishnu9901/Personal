import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import { LoginFormControls, ValidationForm } from '@utils/validation';
import { PasswordFeild } from '@ui/molecules/PasswordFeild';

interface FormValues {
    email: string;
    password: string;
}

interface LoginFormProps {
    onSubmit: (data: FormValues) => void;
    loginModal: (value: boolean) => void;
    mode?: string
}

const AlreadyRegistered: React.FC<LoginFormProps> = ({ onSubmit, loginModal, mode }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);
    const [isModal] = useState(mode === 'modal')

    const { control, handleSubmit, formState: { errors, isSubmitted } } = useForm<FormValues>({
        mode: 'onSubmit',
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };



    return (
        <>
            <div className="mb-8">
                <p className="text-[32px] font-HeroNewRegular">Already registered?</p>
            </div>

            {/* Form */}
            <form className=" pb-2" onSubmit={handleSubmit(onSubmit)} >
                {/* Email Input */}
                <div className={`${isModal ? 'block lg:flex gap-2' : 'flex flex-col'}`}>
                    <div className="basis-1/2">
                        <Controller
                            name={LoginFormControls.Email}
                            control={control}
                            rules={{ required: ValidationForm.Required }}
                            render={({ field }) => (
                                <InputField
                                    className={`rounded-none mb-5 h-[48px] pt-1 pl-4 pb-1 pr-4 text-base border-[1px] w-full ${errors[LoginFormControls.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                                        } ${isSubmitted && errors[LoginFormControls.Email] ? 'focus:outline-blue-700' : 'focus:outline-none'}`} // Conditional outline
                                    type="email"
                                    placeholder="Email *"
                                    {...field}
                                />
                            )}
                        />
                  
                        {errors[LoginFormControls.Email] && (
                            <span className="text-normal text-appErrorMessage font-HeroNewBold  inline-block mb-3">
                                {errors[LoginFormControls.Email]?.message}
                            </span>
                        )}

                    </div>

                    {/* Password Input with Visibility Toggle */}
                    <div className="basis-1/2">
                        <Controller
                            name={LoginFormControls.Password}
                            control={control}
                            rules={{ required: ValidationForm.Required }}
                            render={({ field }) => (
                                <PasswordFeild
                                    className={`rounded-none h-[48px] pl-4 pr-14 text-base border-[1px] w-full ${errors[LoginFormControls.Password] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                                        } ${isSubmitted && errors[LoginFormControls.Password] ? 'focus:outline-blue-700' : 'focus:outline-none'}`} // Conditional outline
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password *"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setIsPasswordFieldEmpty(e.target.value === '');
                                    }}
                                    suffixClassName='top-1/4 right-2'
                                    suffix={(
                                        !isPasswordFieldEmpty && !isModal && (
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="text-gray-600 focus:outline-none"
                                            >
                                                {showPassword ? 'Hide' : 'Show'}
                                            </button>
                                        )
                                    )}
                                />
                            )}
                        />
                        {errors[LoginFormControls.Password] && (
                            <span className="text-normal text-appErrorMessage font-HeroNewBold inline-block mt-5">
                                {errors[LoginFormControls.Password]?.message}
                            </span>
                        )}
                    </div>
                </div>


                {/* Forgot Password button */}

                {!isModal && <div>
                    <Button
                        onClick={() =>  loginModal(false)}
                        className="mt-2 p-0 text-start"
                        type="button"
                    >
                        <span className='bg-none text-appTheme mb-1 text-sm font-HeroNewRegular font-medium hover:font-semibold'>Forgot your Password?</span>
                    </Button>
                </div>}
                <div className={`flex justify-end items-center w-full ${isModal ? 'justify-start flex-row-reverse lg:justify-end lg:flex-row' : ''}`}>
                    {isModal && <Button
                        onClick={() =>  loginModal(false)}
                        className="mt-2 p-0 text-start"
                        type="button"
                    >
                        <span className='bg-none text-appTheme mb-1 text-sm font-HeroNewRegular font-medium hover:font-semibold'>Forgot your Password?</span>
                    </Button>}

                    <Button
                        type="submit"
                        className="bg-appTheme !w-[75px] !h-[48px] text-white p-3 m-1 hover:bg-black hover:underline !text-[15px] font-HeroNewSemiBold"
                    >
                        Log in
                    </Button>
                </div>
            </form>
        </>
    );
};

export default AlreadyRegistered;
