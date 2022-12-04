import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import c from "./Sidebar.module.css"
import Section from "../../../dummy-files/dummy.sidebarsection.json"
import {FaRegUserCircle} from "react-icons/fa"
import {Overlay} from "../../../utils"
import { RiCloseFill, RiArrowRightSLine, RiArrowLeftLine } from "react-icons/ri"

const Sidebar = ({ isSidebarActive, setIsSidebarActive }) => {

  const [secondPageSidebar, setSecondPageSidebar] = useState(false)

  return (
    <div className={isSidebarActive ? "sidebar sidebar__active" : "sidebar"}>
      <div className={c.sidebar__active}>
        <Link to="/login">
          <div className={c.sidebar__signIn} onClick={() => {setIsSidebarActive(false)}}>
          <FaRegUserCircle className={c.sidebar__loginIcon}/>
            <h2>Hello, sign in</h2>
          </div>
        </Link>
        {Section.map(({ title, section, menu }, index) =>
          <div key={index}>
            <div className={c.sidebar__wrapper}>
              <ul className={c.sidebar__list}>
                <li className={c.sidebar__title}>{title}</li>
                {section.map(({ text }, index) =>
                  <li key={index} className={c.sidebar__text} onClick={() => setSecondPageSidebar(true)}><span>{text}</span> <RiArrowRightSLine></RiArrowRightSLine></li>
                )}
              </ul>
            </div>
            <div className={secondPageSidebar ? "sidebar__second sidebar__second__active" : "sidebar__second"}>
              <div onClick={() => setSecondPageSidebar(false)}><RiArrowLeftLine></RiArrowLeftLine> Main Menu</div>
              {menu.map(({ innerText }, index) =>
                <ul key={index}>
                  <li>{innerText}</li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      <button className={c.sidebar__closeBtn} onClick={() => { setIsSidebarActive(false) }}><RiCloseFill></RiCloseFill></button>
      {/* {secondPageSidebar && isSidebarActive && <Overlay type="sidebar" state={secondPageSidebar} callback={setSecondPageSidebar}/>} */}
    </div>
  )
}

export default Sidebar
