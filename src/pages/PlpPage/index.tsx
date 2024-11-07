import { ProductProvider } from "@contexts/PlpContext"
import { PLPPageTemplate } from "@ui/templates/PlpLandingPageTemplate"



export const PlpPage = () => {
    return (
        <ProductProvider>
            <PLPPageTemplate></PLPPageTemplate>
        </ProductProvider>
    )
}