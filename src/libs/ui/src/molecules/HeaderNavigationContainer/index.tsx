import { HeaderNavigationItem } from '@ui/atoms/HeaderNavigationItem'
import './headerNavigationContainer.styles.scss'

interface NavigationContainerProps {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    onClick?: (name: any) => void
}

export const NavigationContainer: React.FC<NavigationContainerProps> = ({ onClick }) => {
  return (
    <>
      <ul className="flex">
        <HeaderNavigationItem onClick={onClick}>Shop</HeaderNavigationItem>
        <HeaderNavigationItem onClick={onClick}>Academy</HeaderNavigationItem>
        <HeaderNavigationItem onClick={onClick}>Events</HeaderNavigationItem>
        <HeaderNavigationItem onClick={onClick}>About</HeaderNavigationItem>
        <HeaderNavigationItem onClick={onClick}>Business tools</HeaderNavigationItem>
        <HeaderNavigationItem onClick={onClick}>Student</HeaderNavigationItem>
      </ul>
    </>
  )
}