import { HeaderNavigationItem } from '@ui/atoms/HeaderNavigationItem'
import './headerNavigationContainer.styles.scss'

interface NavigationContainerProps {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    onClick?: (name: any) => void,
    onMouseEnter?: (name: any) => void;
    onMouseLeave?: (name: any) => void;
}

export const NavigationContainer: React.FC<NavigationContainerProps> = ({ onClick, onMouseEnter , onMouseLeave}) => {
  return (
    <>
      <ul className="flex">
        <HeaderNavigationItem onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Academy</HeaderNavigationItem>
        <HeaderNavigationItem onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Events</HeaderNavigationItem>
        <HeaderNavigationItem onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>About</HeaderNavigationItem>
        <HeaderNavigationItem onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Business tools</HeaderNavigationItem>
        <HeaderNavigationItem onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Student</HeaderNavigationItem>
      </ul>
    </>
  )
}