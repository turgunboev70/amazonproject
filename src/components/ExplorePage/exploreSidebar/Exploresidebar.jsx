import React from 'react'
import c from "./ExploreSidebar.module.css"
import data from "../../../dummy-files/dummy.exploresidebar.json"
import { TbChevronLeft } from "react-icons/tb"
import { Link } from "react-router-dom"

const Exploresidebar = () => {
    return (
        <div className={c.exploreSidebar__box}>
            {data.map(({ title, list, type }, index) =>
                <div key={index}>
                    <h5 className={c.exploreSidebar__text}>{title}</h5>
                    <ul className={c.exploreSidebar__list}>
                        {list.map((({ text }, index) =>
                            <li key={index} className={c.exploreSidebar__item}>
                                <Link to="/" className={c.exploreSidebar__link}>
                                    {type === "link" ? <TbChevronLeft /> : <input type="checkbox" /> }
                                    <span className={c.exploreSidebar__text}>{text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Exploresidebar