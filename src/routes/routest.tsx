import { Route, Routes } from 'react-router-dom'
import { TestPage } from '../pages/TestPage/TestPage'
import { lazy, Suspense } from 'react'
import { AppSpinner } from '@ui/atoms/AppSpinner';

const MainModule = lazy(() => import('../modules/mainModule/mainModule'));
const LandingPage = lazy(() => import('../pages/LandingPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage/index'));

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={
          <Suspense fallback={<AppSpinner />}>
            <MainModule></MainModule>
          </Suspense>}>
          <Route path="test" element={<TestPage></TestPage>} />
          <Route path="" element={<Suspense fallback>
            <LandingPage></LandingPage>
          </Suspense>} />
          <Route path="auth/register" element={<Suspense fallback>
            <RegisterPage></RegisterPage>
          </Suspense>}></Route>
        </Route>
      </Routes>
    </>
  )
}