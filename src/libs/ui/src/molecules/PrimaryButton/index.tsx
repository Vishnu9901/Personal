import { ButtonHTMLAttributes, ReactNode } from "react"
import { Button } from "../../atoms/Button"

interface PrimaryButtonPros extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string
}

export const PrimaryButton: React.FC<PrimaryButtonPros> = ({ children, className, ...rest }) => {
    return (
        <Button className={`bg-appTheme text-white p-3 m-1 hover:bg-black hover:underline ${className}`}
            {...rest}
        >{children}</Button>
    )
}