import { useProductsContext } from "@hooks/ProductsContextHook";
import Breadcrumb from "@ui/molecules/BreadCrum"
import { FilterContainer } from "@ui/molecules/FilterContainer";
import FilterDropdown from "@ui/molecules/FilterDropdown";
import Product from "@ui/molecules/Product";
import { LearnMore } from "@ui/organisms/LearnMoreButton";
import PlpAccordians from "@ui/organisms/PlpSidebar";
import { SortOptions } from "@utils/constants";
import { PLPFilterActions, Variants } from "@utils/enums";
import { useEffect } from "react";
const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
];
export const PLPPageTemplate = () => {
    const {
        filters,
        products,
        updateSortFilters,
        updateFilters,
        loadMore,
        totalProducts,
        showLoadMore
    } = useProductsContext()

    const onSortChange = (data: any) => {
        console.log('onSortChange', data)
    }
    const onCategorySelect = (data: any) => {
        console.log('onCategorySelect', data?.target?.value)
    }
    const onBestSellerChange = (data: any) => {
        console.log('onBestSellerChange', data)
    }
    return (

        <div className="grid grid-cols-2 grid-rows-[100px,2fr] w-full h-full container px-5 lg:pl-appPaddingLeft lg:pr-appPaddingRight mx-auto mt-10">
            <div className="row-start-1 row-end-2 col-start-1 col-end-3">
                <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            </div>
            <div className="row-start-2 row-end-3 col-start-1 col-end-3">
                <div className="grid grid-cols-[23%,2fr]">
                    <div className="h-full col-start-1 col-end-2 hidden lg:block">
                        <PlpAccordians
                            onSortChange={onSortChange}
                            onCategorySelect={onCategorySelect}
                            onBestSellerChange={onBestSellerChange}
                            enableBestSeller={false} 
                            >

                        </PlpAccordians>
                    </div>
                    <div className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3 h-full px-4">
                        <div className="flex justify-between">
                            <div className="flex basis-[65%] items-start px-3">
                                <FilterContainer filters={filters}
                                    onRemoveFilter={(filter) => { updateFilters([filter]) }}
                                    onClearAll={() => updateFilters([], PLPFilterActions.ClearAll)}>
                                </FilterContainer>
                            </div>

                            <div className="flex basis-[35%] justify-end items-start">
                                <div className="flex items-center">
                                    <p className="mr-4 text-gray-500 text-nowrap">{totalProducts} Products</p>
                                    <FilterDropdown options={[
                                        SortOptions.ALPHABETICAL_AZ,
                                        SortOptions.ALPHABETICAL_ZA,
                                        SortOptions.PRICE_LOW_HIGH,
                                        SortOptions.PRICE_HIGH_LOW,
                                    ]}
                                        onSelect={(option) => {
                                            updateSortFilters([option], PLPFilterActions.Add)
                                        }}></FilterDropdown>
                                </div>
                            </div>

                        </div>


                        <div className="grid grid-cols-12">
                            {products.map((product) => (
                                <div className="col-span-4">
                                    <Product {...product} key={product.id} />
                                </div>

                            ))}
                        </div>

                        {products.length > 0 && <>
                            <div className="flex items-center flex-col">
                                <p className="pb-2">Viewing {products.length} out of {totalProducts} products</p>
                                {showLoadMore && <LearnMore onClick={() => { loadMore() }}
                                    title="Load More"
                                    variant={Variants.Secondary}
                                    showIcon={false}
                                    className="!p-4"></LearnMore>}
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}