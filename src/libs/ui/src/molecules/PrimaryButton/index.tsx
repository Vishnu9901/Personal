import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button } from '@ui/atoms/Button'

interface PrimaryButtonPros extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string
}

export const PrimaryButton: React.FC<PrimaryButtonPros> = ({ children, className, ...rest }) => {
  return (
    <Button className={`bg-appTheme text-white p-3 m-1 hover:bg-black hover:underline ${className}`}
      aria-label="primary button"
      id="primary-button"
      {...rest}
    >{children}
    </Button>
  )
}