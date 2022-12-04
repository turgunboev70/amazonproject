import React, { useState } from 'react'
import { Link } from "react-router-dom"
import c from "./PdpImagebar.module.css"
import { RiStarFill } from "react-icons/ri"
import { SlLocationPin } from "react-icons/sl"
import { useDispatch } from 'react-redux'


const PdpImagebar = ({ productImage, productData }) => {
    const dispatch = useDispatch()
    const [checkCart, setCheckCart] = useState(false)

    function sendProduct() {
        const action = {
            type: "ADD_TO_CART",
            data: productData
        }
        setCheckCart(true)

        dispatch(action)
    }

    const [activeImageIndex, setActiveImageIndex] = useState(0)

    return (
        <div className='container'>
            <div className={c.pdp__wrapper}>
                <div className={c.pdp__sidebar}>
                    {
                        productImage?.image?.map(({ url, id }, index) =>
                            <div style={index === activeImageIndex ? { boxShadow: "1px 1px 20px 1px red" } : null} key={id} className={c.pdp__miniImage}>
                                <img onMouseOver={() => setActiveImageIndex(index)} src={url} alt="loading..." />
                            </div>
                        )
                    }
                </div>
                <div className={c.pdp__mainImage}>
                    <div className={c.pdp__imageWrapper}>
                        <img src={productImage.image ? productImage.image[activeImageIndex].url : null} alt="loading..." />
                    </div>
                </div>
                <div className={c.pdp__textBox}>
                    <article>
                        <h1>{productData?.name}</h1>
                        <a href="apple.com">Visit the store</a>
                    </article>
                    <div className={c.pdp__productDetails}>
                        <div className={c.pdp__sailedInfo}>
                            {productData !== null && new Array(Math.floor(productData.ratings))?.fill("*").map((star, index) =>
                                <RiStarFill key={index} className={c.pdp__ratingStar} />
                            )}
                            <p className={c.pdp__ratingsCount}>{productData?.sale} sailed</p>
                            <p className={c.pdp__ratingsCount}>614 answered questions</p>
                        </div>
                        <div className={c.pdp__brandBox}>
                            <div>Amazons choice</div>
                            <p>in Styluses by this brand</p>
                        </div>
                    </div>
                    <div className={c.pdp__infoPages}>
                        <h5 className={c.pdp__productNum}>Temporarily out of stock</h5>
                        <p className={c.pdp__workingHard}>We are working hard to be back in stock as soon as possible.</p>
                        <h4>About this item</h4>
                        <p className={c.pdp__productInfo}>About item{productData?.description}</p>
                    </div>
                </div>
                <div className={c.pdp__cartAdd}>
                    <div className={c.pdp__cartBox}>
                        <h3>Curently unavailable</h3>
                        <p className={c.pdp__cartDesc}>We don't know when or if this item will be back in stock.</p>
                        <p className={c.pdp__location}>
                            <SlLocationPin className={c.pdp__locationIcon} />
                            <span>Deliver to Uzbekistan</span>
                        </p>
                        <button className={c.pdp__cartBtn} onClick={sendProduct}>Add to list</button>
                        {checkCart ? <Link className={c.pdp__checkCart} to="/cartbox">Check your cart box</Link> : <> </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PdpImagebar