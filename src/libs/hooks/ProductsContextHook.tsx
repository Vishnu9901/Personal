import { useContext } from "react";
import { PLPContext } from "@contexts/PlpContext";

export const useProductsContext = () => {
    const context = useContext(PLPContext);
    console.log('Product context', context)
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};