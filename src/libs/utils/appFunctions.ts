import { HeaderNavigationItem } from "./interfaces";

export const makeUrlQuery = (subCategory: string, category: string, subMenu: HeaderNavigationItem[]) => {
    let queryParams = '';
    try {
        const isBestSeller = subCategory === 'Best Seller';
        if (subCategory === 'View All' || isBestSeller) {
            const queryFilters = subMenu
                .filter((option) => option.title === category)
                .map((option) => ({
                    ...option,
                    items: option.items.filter((filter) => filter != 'Best Seller')
                        .map((filter) => `${option.category}=${filter}`)
                }))
            queryParams = isBestSeller
                ? `${queryFilters[0].items.join('&')}&best-seller=best-seller`
                : queryFilters[0].items.join('&');
        } else {
            const queryFilters = subMenu.filter((option) => option.title === category).filter(
                (option) => option.items.map((filter) => `${option.category}=${filter}`)).map((option) => {
                    return `${option.category}=${subCategory}`
                });
            queryParams = queryFilters[0];
        }
        return queryParams;
    } catch (err) {
        return queryParams;
    }
}