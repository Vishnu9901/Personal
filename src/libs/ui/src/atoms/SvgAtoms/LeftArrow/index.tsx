import React from 'react';

interface LeftArrowIconProps {
    fillColor?: string; // Optional fillColor prop for the rect
}

const LeftArrow: React.FC<LeftArrowIconProps> = ({
    fillColor = 'rgb(var(--primary-color))', // Default to primary color variable
}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#D2010D" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7389 4.32616C15.3667 3.91809 14.7342 3.88898 14.3261 4.26114L7.32614 10.6451C7.12351 10.8299 7.00567 11.0898 7.00019 11.364C6.99471 11.6382 7.10208 11.9026 7.29717 12.0954L14.2972 19.0114C14.69 19.3995 15.3232 19.3957 15.7114 19.0028C16.0995 18.61 16.0957 17.9768 15.7028 17.5886L9.45219 11.413L15.6738 5.73888C16.0819 5.36672 16.111 4.73422 15.7389 4.32616Z" fill={fillColor} />
        </svg>
    );
};

export default LeftArrow;
