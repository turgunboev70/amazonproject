import React, { useState, useEffect } from 'react'
import c from "./PdpSidebar.module.css"
import { Link } from "react-router-dom"

const PdpSidebar = ({ productCategory }) => {

  const [mainData, setMainData] = useState([])
  const renderingData = []

  useEffect(() => {
    fetch("http://localhost:8000/v2/allproducts")
      .then(response => response.json())
      .then(data => setMainData(data))
  }, [productCategory])

  mainData?.filter(product => product.productCategory === productCategory ? renderingData.push(product) : null)

  return (
    <div className='container'>
      <div className={c.sidebar__wrapper}>
        <div className={c.sidebar__category}>
          <h2 className={c.sidebar__productCategory}>{productCategory}</h2>
        </div>
        <div className={c.sidebar__similarCategory}>
          {renderingData.map(item =>
            <div className={c.sidebar__productBox}>
              <Link to={`/exploremore/${item._id}`}>
                <div className={c.sidebar__imageBox}>
                  <img className={c.sidebar__productImage} src={item.image[0].url} alt="loading..." />
                </div>
                <h3 className={c.sidebar__productName}>{item.name}</h3>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PdpSidebar