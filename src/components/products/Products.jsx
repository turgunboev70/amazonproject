import React from 'react'
import Product from "../../dummy-files/dummy.products.json"
import c from "./Products.module.css"
import HolidayGifts from '../holidayGifts/HolidayGifts'
import ProductBox from './ProductBox/ProductBox'



const Products = () => {
    return (
        <>
            <div className='container'>
                <div className={c.product__wrapper}>
                    <div className={c.products__wrapper}>
                        {Product.slice(0, 8).map(({ productName, productImage, productLink, productURL }, index) => (
                            <ProductBox productURL={productURL} productName={productName} productImage={productImage} productLink={productLink} key={index}></ProductBox>
                        ))}
                    </div>
                    <HolidayGifts></HolidayGifts>
                    <div className={c.products__wrapper}>
                        {Product.slice(8, -1).map(({ productName, productImage, productLink, productURL },index) => (
                            <ProductBox productURL={productURL} productName={productName} productImage={productImage} productLink={productLink} key={index}></ProductBox>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products