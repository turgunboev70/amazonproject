import React, {useState, useEffect, useRef} from 'react'
import c from "./Slider.module.css"
import Images from "../../dummy-files/dummy.images.json"
import {CgChevronLeft, CgChevronRight} from "react-icons/cg"

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const sliderImage = useRef()



  const prevBtnClick = () => {
    if(currentImage > 0) {
      setCurrentImage(currentImage => currentImage - 1)
    } else {
      setCurrentImage(Images.length - 1)
    }
  }

  const nextBtnClick = () => {
    if(currentImage < Images.length - 1) {
      setCurrentImage(currentImage => currentImage + 1)
    } else {
      setCurrentImage(0)
    }
  }

  useEffect(() => {
    sliderImage.current.scrollLeft = currentImage * sliderImage.current.offsetWidth
  },[currentImage])

  return (
    <>
        <div className="container">
            <div className={c.slider__wrapper}>
            <button data-btn-type="left" className={c.slider__btn} onClick={prevBtnClick}><CgChevronLeft></CgChevronLeft></button>
                <div className={c.images__wrapper} ref={sliderImage}>
                {
                  Images.map((image, index) => (
                    <img key={index} className={c.slider__image} src={image} alt="downloading soon" />
                  ))
                }
                </div>
                <button data-btn-type="right" className={c.slider__btn} onClick={nextBtnClick}><CgChevronRight></CgChevronRight></button>
            </div>
        </div>
    </>
  )
}

export default Slider