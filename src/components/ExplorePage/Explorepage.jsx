import React from 'react'
import Exploresidebar from './exploreSidebar/Exploresidebar'
import ProductRoute from './productRoute/ProductRoute'

const Explorepage = () => {
    return (
        <>
            <div className='explore__page'>
                <Exploresidebar></Exploresidebar>
                <ProductRoute></ProductRoute>
            </div>
        </>
    )
}

export default Explorepage