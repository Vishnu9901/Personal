interface SubHeadingProps {
    children: React.ReactNode,
    classNames?: string
}

export const SubHeading: React.FC<SubHeadingProps> = ({ children, classNames }) => {
    return (
        <p className={`${classNames}`}>{children}</p>
    )
}