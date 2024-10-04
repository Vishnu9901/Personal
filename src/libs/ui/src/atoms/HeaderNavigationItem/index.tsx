import { ReactNode } from "react";


interface HeaderNavigationItem {
    children: ReactNode;
}

export const HeaderNavigationItem: React.FC<HeaderNavigationItem> = ({ children }) => {
    return <li className="headerNavigation-item hover:underline hover:underline-offset-1 flex items-center justify-center font-HeroNewRegular text-tertiary-400 py-3 px-4 font-normal"
    >{children}</li>

}