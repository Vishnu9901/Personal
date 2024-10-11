import { Outlet } from 'react-router-dom'
import { Header } from '../../libs/ui/src/organisms/Header'
import { Footer } from '../../libs/ui/src/organisms/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { toggleLoginModel } from '@store/services/slices/ModalSlice';
import { LoginModal } from '@ui/organisms/LoginModal';


export const MainModule = () => {
  // Modal
  const dispatch = useDispatch();


  // Subscribe to the Redux state for modal toggle
  const isLoginModalOpen = useSelector((state: RootState) => state.modal.isLoginModalOpen);

  // Function to toggle modal visibility using Redux
  const modalSetToggle = () => {
    dispatch(toggleLoginModel());
  };

  return (
    <>
      {/* Header */}
      <Header openLogin={modalSetToggle}></Header>

      {/* Main block */}
      <main>
        <Outlet></Outlet>
      </main>

      {/* Footer */}
      <Footer></Footer>

      {isLoginModalOpen && <LoginModal close={modalSetToggle}>
      </LoginModal>}
    </>
  )
}