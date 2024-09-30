import { Route, Routes } from "react-router-dom"
import { TestPage } from "../pages/TestPage/TestPage"
import { LandingPage } from "../pages/LandingPage"
import { MainModule } from "../modules/mainModule/mainModule"

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<MainModule></MainModule>}>
                    <Route path="test" element={<TestPage></TestPage>} />
                    <Route path="" element={<LandingPage></LandingPage>} />
                </Route>
            </Routes>
        </>
    )
}