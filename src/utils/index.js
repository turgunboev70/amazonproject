import React, {useEffect} from 'react'
import { useLocation } from "react-router-dom";
import c from "./index.module.css"


const Backtotop = () => {
    const {pathname} = useLocation()
    
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className={c.backtotop__wrapper} onClick={scrollToTop}>
            <p className={c.backtotop__text}>Back to top</p>
        </div>
    )
}

const Overlay = ({callback, type}) => {
  return (
    <div onClick={() => {callback(false)}} className={c.overlay} style={type === "navbar" ? {top: "100px", position : "fixed"} : null}></div>
  )
}

export {Overlay, Backtotop}
