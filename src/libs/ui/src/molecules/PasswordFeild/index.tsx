import React, { forwardRef } from 'react';

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  suffix?: React.ReactNode;
  labelClassName?: string
  suffixClassName?: string
  // other props that you want to allow for this component
}

export const PasswordFeild = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, className, labelClassName, suffixClassName, suffix, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {label && <label htmlFor={props.id} className={`${labelClassName}`}>{label}</label>}
        <input ref={ref} className={`${className} w-full`} {...props} />
        {suffix && (
          <div className={`absolute right-0 ${suffixClassName}`}>
            {suffix}
          </div>
        )}
      </div>
    );
  }
);

PasswordFeild.displayName = 'PasswordField';