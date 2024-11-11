import { Button } from '@ui/atoms/Button';
import React from 'react';

interface ClearAllButtonProps {
    onClearAll: () => void;
}

export const ClearAllButton: React.FC<ClearAllButtonProps> = ({ onClearAll }) => {
    return (
        <Button
            onClick={onClearAll}
            className="ml-4 text-xs text-appTheme hover:font-HeroNewExtraBold transition-all duration-200 ease-in-out hover:scale-110"
        >
            Clear All
        </Button>
    );
};