import React from 'react';
import ReactDom from 'react-dom';


interface ModalProps {
  children: React.ReactNode;
  className?: string
}

const Modal: React.FC<ModalProps> = ({ children, className }) => {
  return ReactDom.createPortal(
    <div className="modal-overlay lg:!p-[4rem] bg-[#00000040] z-50 h-full w-full fixed top-[0%] flex items-center transition-[hidden]  justify-center overflow-auto">
      <div
        className={`lg:!w-[650px] md:w-[400px] 2xs:w-[400px] h-auto bg-white relative overflow-y-auto ${className}`}
      >
        {children}
      </div>
    </div>,
    document.getElementById('root')!
  );
};

export default Modal;
