import React from 'react';
import LeftArrow from '@ui/atoms/SvgAtoms/LeftArrow';
import CloseIcon from '@ui/atoms/SvgAtoms/CloseIcon';
import { useProductsContext } from '@hooks/ProductsContextHook';
import { Button } from '@ui/atoms/Button';
import { PrimaryButton } from '@ui/molecules/PrimaryButton';
import Paragraph from '@ui/atoms/Paragraph';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: React.ReactNode;
    children: React.ReactNode;
}

const PLPMobileMenu: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const {
        products
    } = useProductsContext();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-start justify-center z-50 bg-black bg-opacity-50 h-[91%]">
            <div className="bg-gray-100 w-full shadow-lg dark:bg-appModalColor max-h-[114vh] overflow-y-auto"> {/* Constrained height */}
                <div className='bg-white px-6 pt-4'>
                    <div className="flex justify-between items-center">
                        <Button onClick={onClose} >
                            <LeftArrow></LeftArrow>
                        </Button>
                        <Paragraph className="font-HeroNewRegular">{title} </Paragraph>
                        <Button onClick={onClose} >
                            <CloseIcon></CloseIcon>
                        </Button>

                    </div>
                    <Paragraph className='text-sm flex justify-center w-full'>{products.length} products</Paragraph>
                    <div className='mt-4'> {/* Scroll inside the modal */}
                        {children}
                    </div>
                </div>

                <div className='flex justify-between items-center p-6'>
                    <p className='text-base text-appTheme font-HeroNewLight cursor-pointer' onClick={onClose} >Clear All</p>
                    <PrimaryButton className='hover:bg-gray-500 !py-2 hover:no-underline font-HeroNewBold px-5' onClick={onClose} >Show Result</PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default PLPMobileMenu;