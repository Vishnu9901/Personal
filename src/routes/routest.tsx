import { Route, Routes } from 'react-router-dom'
import { TestPage } from '../pages/TestPage/TestPage'
import { LandingPage } from '../pages/LandingPage'
import { MainModule } from '../modules/mainModule/mainModule'
import { Suspense } from 'react'
import { AppSpinner } from '@ui/atoms/AppSpinner'

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={
          <Suspense fallback={<AppSpinner />}>
            <MainModule></MainModule>
          </Suspense>}>
          <Route path="test" element={<TestPage></TestPage>} />
          <Route path="" element={<LandingPage></LandingPage>} />
        </Route>
      </Routes>
    </>
  )
}