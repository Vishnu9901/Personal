import Breadcrumb from "@ui/molecules/BreadCrum"
import Product from "@ui/molecules/Product";
import { LearnMore } from "@ui/organisms/LearnMoreButton";
import { Variants } from "@utils/enums";
import { products } from '@utils/testData';
const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/products' },
    // { label: 'Treatment Enhancements' },
];
export const PLPPageTemplate = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-[100px,2fr] w-full h-full container lg:pl-appPaddingLeft lg:pr-appPaddingRight mx-auto mt-10">
            <div className="row-start-1 row-end-2 col-start-1 col-end-3">
                <Breadcrumb breadcrumbs={breadcrumbs}></Breadcrumb>
            </div>
            <div className="row-start-2 row-end-3 col-start-1 col-end-3">
                <div className="grid grid-cols-[20%,2fr]">
                    <div className="h-full col-start-1 col-end-2">SideBar</div>
                    <div className="col-start-2 col-end-3 h-full">
                        <div className="flex flex-wrap gap-x-6">
                            {products.map((product) => (
                                <Product {...product} key={product.id} />
                            ))}
                        </div>
                        <div className="flex items-center flex-col">
                            <p className="pb-2">Viewing 9 out of 50 products</p>
                            <LearnMore onClick={() => { console.log('Clicked') }}
                                title="Load More"
                                variant={Variants.Secondary}
                                showIcon={false}
                                className="!p-4"></LearnMore>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}