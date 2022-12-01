import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PdpImagebar from './components/pdpImagebar/PdpImagebar'
import PdpSidebar from './components/pdpSidebar/PdpSidebar'

const Pdp = () => {
  const productId = useParams()
  const [productData, setProductData] = useState(null)
  useEffect(() => {
    fetch(`http://localhost:8000/v2/allproducts/${productId.id}`)
      .then(response => response.json())
      .then(data => setProductData(data))
  }, [productId.id])


  return (
      <div>
        <PdpSidebar productCategory={productData?.productCategory}/>
        <PdpImagebar productImage={productData !== null && productData} productData={productData}/>
      </div>
  )
}

export default Pdp