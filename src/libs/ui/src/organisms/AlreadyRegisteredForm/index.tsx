import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import {LoginFormControls, ValidationForm  } from '@utils/validation';
import { PasswordFeild } from '@ui/molecules/PasswordFeild';

interface FormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  loginModal: (value: boolean) => void;
}

const AlreadyRegistered: React.FC<LoginFormProps> = ({ onSubmit, loginModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);

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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-2">
        {/* Email Input */}
        <div className="mb-8 inline-grid">
          <Controller
            name={LoginFormControls.Email}
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <InputField
                className={`rounded-none mb-2 h-[48px] pt-1 pl-4 pb-1 pr-4 text-base border-[1px] ${
                  errors[LoginFormControls.Email] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                } ${isSubmitted && errors[LoginFormControls.Email] ? 'focus:outline-blue-700' : 'focus:outline-none'}`} // Conditional outline
                type="email"
                placeholder="Email *"
                {...field}
              />
            )}
          />
          {errors[LoginFormControls.Email] && (
            <span className="text-normal text-appErrorMessage font-HeroNewBold">
              {errors[LoginFormControls.Email]?.message}
            </span>
          )}
        </div>

        {/* Password Input with Visibility Toggle */}
        <div className="inline-grid">
          <Controller
            name={LoginFormControls.Password}
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <PasswordFeild
                className={`rounded-none h-[48px] pb-1 pl-4 pr-4 text-base border-[1px] ${
                  errors[LoginFormControls.Password] ? 'border-[#595959]' : 'border-[#d6d6d6]'
                } ${isSubmitted && errors[LoginFormControls.Password] ? 'focus:outline-blue-700' : 'focus:outline-none'}`} // Conditional outline
                type={showPassword ? 'text' : 'password'}
                placeholder="Password *"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  setIsPasswordFieldEmpty(e.target.value === '');
                }}
                suffix={(
                  !isPasswordFieldEmpty && (
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
            <span className="text-normal text-appErrorMessage font-HeroNewBold mt-3">
              {errors[LoginFormControls.Password]?.message}
            </span>
          )}
        </div>

        {/* Forgot Password button */}
        <Button
          onClick={() => loginModal(false)}
          className="mt-2 p-0 text-start"
          type="button"
        >
          <span className='bg-none text-appTheme mb-1 text-sm font-HeroNewRegular font-medium hover:font-semibold'>Forgot your Password?</span>
        </Button>

        <div className="flex justify-between items-center w-full">
          <div className="flex-grow !h-[48px] !w-[75px]" />
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
