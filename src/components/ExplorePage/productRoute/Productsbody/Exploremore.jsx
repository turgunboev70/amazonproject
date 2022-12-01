import React, { useEffect, useState } from 'react'
import c from "./Exploremore.module.css"
import { Link } from "react-router-dom"
import { RiStarFill, RiStarHalfFill } from 'react-icons/ri'

const Exploremore = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/v2/allproducts")
            .then(response => response.json())
            .then(data => setProductData(data))
    }, [])


    return (
        <div className='container'>
            <div className={c.product__wrapper}>
                <h1 className={c.product__resText}>Results</h1>
                <p className={c.product__priceDesc}>Price and other details may vary based on product size and color.</p>
                <div className={c.productBox__area}>
                    {
                        productData.length > 0 && productData.map(({ image, ratings, _id, name, description }) =>
                            <Link className={c.product__wrapperLink} key={_id} to={`/exploremore/${_id}`}>
                                <div key={_id} className={c.product__box}>
                                    <div className={c.product__imageBox}>
                                        <img className={c.product__image} src={image[0].url} alt={name} />
                                    </div>
                                    <div>
                                        <h2 className={c.product__descHeading}>{description}</h2>
                                    </div>
                                    <div className={c.product__rating}>
                                        {ratings % 1 === 0 ?
                                            new Array(ratings).fill("*").map((rating, index) =>
                                                <RiStarFill key={index} className={c.product__ratingStar}/>
                                            )
                                            :
                                            <>
                                                {
                                                    new Array(Math.floor(ratings)).fill("*").map((rating, index) =>
                                                        <RiStarFill key={index} className={c.product__ratingStar}/>
                                                    )
                                                }
                                                <RiStarHalfFill className={c.product__ratingStar}/>
                                            </>
                                        }
                                        <p className={c.product__ratingCount}>{ratings}</p>
                                    </div>
                                    <Link className={c.product__title} to={`/exploremore/${_id}`}>{name}</Link>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Exploremore