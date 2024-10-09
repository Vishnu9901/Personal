import { Outlet } from 'react-router-dom'
import { Header } from '../../libs/ui/src/organisms/Header'
import { Footer } from '../../libs/ui/src/organisms/Footer'

export const MainModule = () => {

  return (
    <>
      {/* Header */}
      <Header></Header>

      {/* Main block */}
      <main>
        <Outlet></Outlet>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </>
  )
}