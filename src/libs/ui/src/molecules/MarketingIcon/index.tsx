import AcademyIcon from '@ui/atoms/SvgAtoms/AcademyIcon';
import LoyaltyIcon from '@ui/atoms/SvgAtoms/LoyaltyIcon';
import OrderManagementtIcon from '@ui/atoms/SvgAtoms/OrderManagementtIcon';
import SubscribeIcon from '@ui/atoms/SvgAtoms/SubscribeIcon';
import React from 'react';

interface IconDisplayProps {
    title: string;
}

const renderIcon = (title: string) => {
    switch (title) {
        case 'Loyalty':
            return <LoyaltyIcon />;
        case 'Order Management':
            return <OrderManagementtIcon />;
        case 'Academy':
            return <AcademyIcon />;
        case 'Subscriptions':
            return <SubscribeIcon />;
        default:
            return null;
    }
};
const MarketingIcon: React.FC<IconDisplayProps> = ({ title }) => {
    return (
        <>
            {renderIcon(title)}
        </>
    );
};

export default MarketingIcon;
