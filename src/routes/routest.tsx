import { Route, Routes } from "react-router-dom"
import { TestPage } from "../pages/TestPage/TestPage"

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<TestPage></TestPage>}/>
            </Routes>
        </>
    )
}