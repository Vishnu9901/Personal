import { HeaderNavigationItem } from '@ui/atoms/HeaderNavigationItem'
import './headerNavigationContainer.styles.scss'

export const NavigationContainer = () => {
    return (
        <>
        {/* grid grid-cols-6 */}
            <ul className="flex">
                <HeaderNavigationItem>Shop</HeaderNavigationItem>
                <HeaderNavigationItem>Academy</HeaderNavigationItem>
                <HeaderNavigationItem>Events</HeaderNavigationItem>
                <HeaderNavigationItem>About</HeaderNavigationItem>
                <HeaderNavigationItem>Business tools</HeaderNavigationItem>
                <HeaderNavigationItem>Student</HeaderNavigationItem>
            </ul>
        </>
    )
}