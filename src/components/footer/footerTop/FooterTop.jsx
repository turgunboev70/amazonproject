import React from 'react'
import c from "./FooterTop.module.css"
import text from "../../../dummy-files/dummy.footerTop.json"

const FooterTop = () => {
    return (
        <div className={c.footer__wrapper}>
            <div className={c.footer__box}>
                <ul className={c.footer__list}>
                    <li className={c.footer__item}>
                        {text.map((arr, index) => (
                            <ul key={index} className={c.footer__category}>
                                {arr.map(({ text }, index) => (
                                    <li key={index} className={c.footer__line}>{text}</li>
                                ))}
                            </ul>
                        ))}
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    )
}

export default FooterTop