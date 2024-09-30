import { Outlet } from "react-router-dom"

export const MainModule = () => {

    return (
        <>
            {/* Header */}
            {/* <header>Header</header> */}
            {/* Main block */}
            <div>
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            {/* <footer>Footer</footer> */}
        </>
    )
}