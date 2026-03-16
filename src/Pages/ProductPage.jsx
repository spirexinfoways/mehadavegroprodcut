import React from 'react'
import DynamicPageHeader from './../CommonComponents/DynamicPageHeader';
import ProductsShowcase from './../Components/ProductComponent/ProductsShowcase';
import pg1 from '../assets/HomeImg/product.jpg'

const ProductPage = () => {
    return (
        <div>
            <div className='overflow-hidden outfit'>
                <DynamicPageHeader
                    title="Our Products"
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Products" }
                    ]}
                    bgImage={pg1}
                />
                <ProductsShowcase />
            </div>
        </div>
    )
}

export default ProductPage
