import React from "react";

interface IconWithHoverEffectProps {
    children: React.ReactNode,
    defualtColor?: string,
    hoverColor?: string
}

export const IconWithHoverEffect: React.FC<IconWithHoverEffectProps> = ({
    children,
    defualtColor="gray",
    hoverColor="rgb(var(--primary-color))"
}) => {
    return (
        <>
            <span className='group-hover:hidden'>
                {React.Children.map(children, (child: any) => {
                    return React.cloneElement(child, { fillColor: defualtColor });
                })}
            </span>
            <span className='hidden group-hover:block'>
                {React.Children.map(children, (child: any) => {
                    return React.cloneElement(child, { fillColor: hoverColor });
                })}
            </span></>
    )
}