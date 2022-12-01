import React from 'react'
import c from "../Products.module.css"
import { Link } from "react-router-dom"

const ProductBox = ({ key, productName, productImage, productLink, productURL }) => {
    return (
        <div key={key}>
            <Link className={c.product__box__link} to="/exploremore">
                <div className={c.product__box}>
                    <h2 className={c.product__name}>{productName}</h2>
                    <div key={key} className={c.productImage__wrapper}>
                        {typeof productImage === "string" ?
                            <img className={c.product__image} width="338.63px" height="303.7px" src={productImage} alt="product desc" />
                            : productImage.map(category => (
                                <div className={c.productImage__box}>
                                    <img className={c.productImage__category} src={category.img} alt="mini photos by category" />
                                    <p className={c.productImage__text}>{category.title}</p>
                                </div>
                            ))}
                    </div>
                    <Link className={c.product__link} to={productURL}>{productLink}</Link>
                </div>
            </Link>
        </div>
    )
}

export default ProductBox