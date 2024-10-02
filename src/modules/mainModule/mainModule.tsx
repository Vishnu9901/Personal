import { Outlet } from "react-router-dom"
import { Header } from "../../libs/ui/src/organisms/Header"
import { Footer } from "../../libs/ui/src/organisms/Footer"

export const MainModule = () => {

    return (
        <>
            {/* Header */}
            <Header></Header>
            {/* Main block */}
            <div>
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </>
    )
}