import React, { useState, useEffect, useRef } from 'react'
import HolidaysGifts from "../../dummy-files/dummy.holidaysgifts.json"
import c from "./HolidayGifts.module.css"
import { CgChevronLeft, CgChevronRight } from "react-icons/cg"

const HolidayGifts = () => {
    const [currentPerformance, setCurrentPerformance] = useState(0)
    const productWrapperEl = useRef()
    const prevBtn = () => {
        if (currentPerformance === 1) {
            setCurrentPerformance(currentPerformance => currentPerformance - 1);
        }
    }

    const nextBtn = () => {
        if (currentPerformance === 0) {
            setCurrentPerformance(currentPerformance => currentPerformance + 1)
        }
    }

    useEffect(() => {
        productWrapperEl.current.scrollLeft = currentPerformance * productWrapperEl.current.offsetWidth
    }, [currentPerformance])

    return (
        <div className={c.gifts__wrapper}>
            <h3 className={c.gifts__title}>Top sellers in Books for you</h3>
            <button onClick={prevBtn} className={c.slider__btn} data-btn-type="left"><CgChevronLeft></CgChevronLeft></button>
            <ul className={c.products__list} ref={productWrapperEl}>
                {HolidaysGifts.map((product, index) => (
                    <li key={index}>
                        <img src={product.image} alt="little gifts for you" />
                    </li>
                ))}
            </ul>
            <button onClick={nextBtn} className={c.slider__btn} data-btn-type="right"><CgChevronRight></CgChevronRight></button>
        </div>
    )
}

export default HolidayGifts
