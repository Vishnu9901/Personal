import { ReactNode } from "react";


interface HeaderNavigationItem {
    children: ReactNode;
}

export const HeaderNavigationItem: React.FC<HeaderNavigationItem> = ({ children }) => {
    return <li className="headerNavigation-item px-2 py-3 hover:underline hover:underline-offset-1 flex items-center justify-center"
    >{children}</li>

}