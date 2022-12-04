import React, { useState, useEffect } from 'react'
import c from "./HeaderBottom.module.css"
import { Overlay } from "../../../utils"
import { CgMenu } from "react-icons/cg"
import { useDispatch } from 'react-redux'
import sideBarSection from ".././../../dummy-files/dummy.sidebar.json"
import Sidebar from '../sidebar/Sidebar'

const HeaderBottom = () => {
    const dispatch = useDispatch()
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    useEffect(() => {
        if (isSidebarActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isSidebarActive])

  return (
    <div className={c.header__bottom__wrapper}>
            <div className='container'>
                <div className={c.header__bottom}>
                    <div className={c.sidebar__wrapper}>
                        <button onClick={() => { setIsSidebarActive(true) }} className={c.sidebar__btn}>
                            <CgMenu className={c.sidebar__icon}></CgMenu>
                            All
                        </button>
                    </div>
                    <ul className={c.sidebar__list}>
                        {sideBarSection.map(({ text }, index) => (
                            <li key={index} className={c.sidebar__item}>{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <Sidebar isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive}></Sidebar>
            {isSidebarActive && <Overlay type="sidebar" state={isSidebarActive} callback={setIsSidebarActive} />}
        </div>
  )
}

export default HeaderBottom