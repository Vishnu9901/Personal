import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Label } from '@ui/atoms/Label';
import { Button } from '@ui/atoms/Button';
import { InputField } from '@ui/molecules/FormField';
import { PasswordFeild } from '@ui/molecules/PasswordFeild';
import { LoginFormControls, ValidationForm } from '@utils/validation';
import { SubtitleLabel } from '@ui/molecules/SubTitleLabel';
import { Checkbox } from '@ui/molecules/Checkbox';
import { ValidationCheckMark } from '@ui/atoms/ValidationCheckMark';
import './register.styles.scss'
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
}


const RegisterForm: React.FC = () => {
  const { handleSubmit, control, clearErrors, formState: { errors, isSubmitted }, watch } = useForm<FormValues>({
    mode: 'onChange',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFieldEmpty, setIsPasswordFieldEmpty] = useState(true);
  const [isConfirmPasswordFieldEmpty, setIsConfirmPasswordFieldEmpty] = useState(true);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
  //   const [isModalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [checkPolicy, setIsCheckedPolicy] = useState(false);

  const watchFirstName = watch('firstName');
  const watchLasttName = watch('lastName');
  const watchEmail = watch('email');
  const watchPassword = watch('password');


  const onSubmit = (data: FormValues) => {
    console.log('Registering:', data);
  };
  const handleFocus = () => {
    // setModalOpen(true);
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const handlePolicyCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedPolicy(event.target.checked);
  };

  const handleBlur = () => {
    // setModalOpen(false);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="min-lg:w-[67%] w-[648px] max-md:w-[100%] bg-white p-9 shadow-normal inline-grid !my-16">
        {/* Header */}
        <div className="text-start">
          <p className="text-[32px] mb-[32px] font-HeroNewRegular text-black">Register Your Profile</p>
        </div>
        {/* Primary Contact Subtitle */}
        <div className="mb-1  text-left">
          <SubtitleLabel className="font-HeroNewLight !text-black text-left !text-[16px]" >Primary Contact</SubtitleLabel>
        </div>

        <div className="inline-grid text-start ">
          <Label className="text-xs font-HeroNewUltraLight register-form-label">Email Address <span className="font-HeroNewLight text-red-600">*</span></Label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: ValidationForm.Required,
              pattern: {
                value: ValidationForm.EmailValidationRule,
                message: ValidationForm.EmailRuleFailed,
              },
            }}
            render={({ field }) => (

              <div className="relative w-full">
                <InputField
                  type='email'
                  id="email"
                  placeholder=""
                  {...field}
                  className={`h-12 rounded-none register-form-control text-base border-[1px] w-full 
                  ${errors.email ? 'border-formFieldBorder' : 'border-slate-200'}
                  ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                />
                {watchEmail && !errors?.email && (
                  <ValidationCheckMark className='top-[19px]'></ValidationCheckMark>
                )}
              </div>

            )}
          />
          {errors.email && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.email.message}</span>}
        </div>
        {/* First Name */}
        <div className="mb-2 inline-grid text-start">
          <Label className="text-xs font-HeroNewUltraLight register-form-label">First Name <span className='text-red-600'>*</span></Label>

          <Controller
            name="firstName"
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <div className="relative w-full">
                <InputField
                  type='text'
                  id="firstname"
                  placeholder="First Name *"
                  {...field}
                  className={`h-12 rounded-none register-form-control text-base border-[1px] w-full 
                    ${errors.firstName ? 'border-formFieldBorder' : 'border-slate-200'}
                    ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                />
                {/* Conditionally render the checkmark icon */}
                {watchFirstName && (
                  <ValidationCheckMark className='top-[19px]'></ValidationCheckMark>
                )}
              </div>
            )}
          />
          {errors.firstName && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.firstName.message}</span>}


        </div>

        {/* Last Name */}
        <div className="mb-2 inline-grid text-start">
          <Label className=" text-xs font-HeroNewUltraLight register-form-label">Last Name <span className="text-red-600">*</span></Label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: ValidationForm.Required }}
            render={({ field }) => (
              <div className="relative w-full">
                <InputField
                  type='text'
                  id="lastname"
                  placeholder="Last Name *"
                  {...field}
                  className={`h-12 rounded-none  register-form-control  text-base border-[1px] w-full 
                    ${errors.lastName ? 'border-formFieldBorder' : 'border-slate-200'}
                    ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                />
                {watchLasttName && (
                  <ValidationCheckMark className='top-[19px]'></ValidationCheckMark>
                )}
              </div>
            )}
          />
          {errors.lastName && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.lastName.message}</span>}
        </div>

        {/* Password */}
        <div className="mb-2 inline-grid text-start ">
          <Label className="text-xs font-HeroNewUltraLight register-form-label pb-1">Password <span className="text-red-600">*</span></Label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: ValidationForm.Required,  // Only show this message after submit
              minLength: {
                value: 8,
                message: ValidationForm.PasswordRequirementFailed
              },
              pattern: {
                value: ValidationForm.PasswordValidationRule,
                message: ValidationForm.PasswordRequirementFailed,
              },
            }}
            render={({ field }) => (
              <div className="relative">
                {/* {isModalOpen && (
                                    <div className="mb-20 absolute z-10 left-0 bottom-full mb-2 w-full text-black bg-slate-300 text-sm border border-gray-200 rounded-lg shadow-md custom-modal">
                                        
                                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-5 border-x-transparent border-b-5 border-b-slate-300" />
                                       
                                    </div>
                                )} */}
                <PasswordFeild
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password*"
                  {...field}
                  onClick={handleFocus}
                  onBlur={handleBlur}
                  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                  onChange={(e: any) => {
                    field.onChange(e);
                    setIsPasswordFieldEmpty(e.target.value === '');
                    if (errors.password) {
                      clearErrors('password');  // Clear password error on input change
                    }
                  }}
                  className={`h-12 rounded-none register-form-control  text-base border-[1px] w-full 
                    ${errors.password ? 'border-formFieldBorder' : 'border-slate-200'}
                    ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                  suffixClassName='top-1/4 right-2'
                  suffix={!isPasswordFieldEmpty && ( // Only show if the password field is not empty
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="focus:outline-none font-light text-black"
                    >
                      {showPassword ? 'hide' : 'show'}
                    </button>
                  )}
                />
              </div>
            )}
          />
          {errors.password && (
            <span className="text-appErrorMessage text-normal font-HeroNewBold">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Modal for password requirements */}



        {/* Confirm Password */}
        <div className="mb-2 inline-grid text-start">
          <Label className="text-xs font-HeroNewUltraLight register-form-label">Confirm Password <span className="text-red-600">*</span></Label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: ValidationForm.Required,
              validate: (value) => value === watchPassword || ValidationForm.PasswordNotMatch,
            }}
            render={({ field }) => (
              <PasswordFeild
                label=""
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'} // Toggle password visibility
                placeholder="Confirm Password *"
                {...field}
                onChange={(e: { target: { value: string; }; }) => {
                  field.onChange(e);
                  setIsConfirmPasswordFieldEmpty(e.target.value === ''); // Check if the field is empty
                }}
                className={`h-12 rounded-none register-form-control text-base border-[1px] w-full 
                  ${errors.confirmPassword ? 'border-formFieldBorder' : 'border-slate-200'}
                  ${isSubmitted && errors.email ? 'focus:outline-none' : 'focus:outline-none'}`}
                suffixClassName='top-1/4 right-2'
                suffix={(
                  !isConfirmPasswordFieldEmpty &&
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="font-light text-black focus:outline-none"
                  >
                    {showConfirmPassword ? 'hide' : 'show'}
                  </button>
                )}
              />
            )}
          />
          {errors.confirmPassword && <span className="text-appErrorMessage text-normal font-HeroNewBold">{errors.confirmPassword.message}</span>}

        </div>

        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='text-left text-[#333333] font-HeroNewLight text-xs pt-[11px] pb-6 !leading-6  '
        >
          <label>Please send me exclusive offers and updates from PCA SKIN. You have the freedom to unsubscribe whenever you wish.</label>

        </Checkbox>

        <Checkbox
          checked={checkPolicy}
          onChange={handlePolicyCheckbox}
          className={`text-left !m-0 font-HeroNewLight text-[#333333] text-xs pt-[11px] pb-6 !leading-6 rounded-none h-12 p-0  border-[1px] ${errors[LoginFormControls.Email] ? 'border-[#595959]' : 'border-none'}
            ${isSubmitted && (errors[LoginFormControls.Email] || !checkPolicy) ? 'focus:outline-blue-700 border-formFieldBorder' : 'focus:outline-none'}`}
        >
          <label>Kindly explore our <a className='text-[#125ce0] text-sm font-HeroNewRegular'>privacy policy</a> to understand how we utilize your information.<span className='text-red-700'>*</span> </label>
        </Checkbox>

        <div className="flex justify-between items-center w-full">
          <div className="flex-grow" />

          <Button
            type="submit"
            className="bg-blue-600 text-white p-3 m-1 mt-10px text-sm hover:bg-black hover:underline font-HeroNewSemiBold"
          >
            Create Account
          </Button>
        </div>

      </form>
    </div>
  );
};

export default RegisterForm;
