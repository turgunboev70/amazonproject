import React from 'react'
import c from "./FooterBottom.module.css"
import data from "../../../dummy-files/dummy.footerBottom.json"

const FooterBottom = () => {
    return (
        <div className={c.footerBottom__wrapper}>
            <div className={c.footerBottom__box}>
                {data.map((list, index) =>
                    <ul key={index} className={c.footerBottom__list}>
                        {list.map(({ link, text }, index) =>
                        <a key={index} href="/">
                            <li className={c.footerBottom__item}>{link} <br />
                                <span>{text}</span></li>
                        </a>
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default FooterBottom