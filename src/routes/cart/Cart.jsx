import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import c from "./Cart.module.css"
import { MdStar } from "react-icons/md"


const Cart = () => {
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    
    return (
        <div className='container'>
            <div className={c.productCart__wrapper}>
                <h1 className={c.productCart__title}>Your Lists</h1>
                <div className={c.productCart__boxWrapper}>
                    <ul className={c.productCart__list}>
                        {selector?.cart?.productBox.length > 0 ?
                            selector?.cart?.productBox.map((product, index) =>
                                <>
                                    <li key={index} className={c.productCart__box}>
                                        <div className={c.productCart__info}>
                                            <div className={c.productCart__imageBox}>
                                                <img className={c.productCart__image} src={product?.image[0].url} alt="loading..." />
                                            </div>
                                            <div className={c.productCart__text}>
                                                <Link className={c.productCart__name} to={`exploremore/${product._id}`}>{product?.name}</Link>
                                                <div>
                                                    {new Array(Math.floor(product?.ratings)).fill("*").map(star =>
                                                        <MdStar className={c.productCart__star} />
                                                    )}
                                                </div>
                                                <button className={c.productCart__btn} onClick={() => {
                                                    dispatch({
                                                        type : "REMOVE_CART",
                                                        data : product
                                                    })
                                                }}>Delete product</button>
                                            </div>
                                        </div>
                                    </li>
                                    <Link to="exploremore">Continue to shopping</Link>
                                </>
                            )
                            :
                            <li className={c.productCart__emptyList}>
                                <h3 className={c.productCart__emptyText}>Your cart is empty</h3>
                                <Link className={c.productCart__shoppingLink} to="/exploremore">Buy something new</Link>
                            </li>


                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart