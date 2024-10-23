import { TfiClose } from 'react-icons/tfi';

interface modalHeaderProps {
    onClose: () => void;
    className?: string;
    children?: React.ReactNode;
}

const ModalHeader: React.FC<modalHeaderProps> = ({ onClose, className, children }) => {
  return (
    <div className={` ${className}`}>
      {children}
      
    </div>
  );
}
export default ModalHeader;