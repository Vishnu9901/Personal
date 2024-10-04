import { ReactNode } from 'react'
import './topHeader.styles.scss'
interface TopHeaderProps {
    children: ReactNode
}
{/* <p>Spend $1200 and receive 10 PCA SKIN Holiday Bags + Free Shipping</p> */ }
export const TopHeader: React.FC<TopHeaderProps> = ({ children }) => {
    return <div className='bg-black text-white topHeader'>
        <div className="flex h-full justify-center items-center lg:justify-end gap-3  text-[.75rem] container marginLeftRightAuto  pl-appPaddingLeft pr-appPaddingRight">
            {children}
        </div>
    </div>
}