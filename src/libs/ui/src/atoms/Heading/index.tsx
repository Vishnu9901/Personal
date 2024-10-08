import React, { ReactNode } from "react"

interface HeadingProps {
    children: ReactNode
    className?: string
}

export const Heading: React.FC<HeadingProps> = ({ className, children }) => {
    return (<>
        <h1 className={`${className}`}>{children}</h1>
    </>)
}