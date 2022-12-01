import React, { useState } from 'react'
import brandLogo from "../../../images/Amazon_logo.svg.png"
import { GrSearch } from "react-icons/gr"
import { SlLocationPin } from "react-icons/sl"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { BiChevronDown } from "react-icons/bi"
import c from "./HeaderTop.module.css"
import { Overlay } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom"

const HeaderTop = () => {
    const [sectionValue, setSectionValue] = useState("all")
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("lang"))
    const [inputFocus, setInputFocus] = useState(false)
    const [languageFocus, setLanguageFocus] = useState(false)
    const { t } = useTranslation()
    const { i18n } = useTranslation()

    const changeWebsiteLang = ( ) => {
        i18n.changeLanguage(selectedLanguage)
    }

    const submitForm = (e) => {
        e.preventDefault()

        setInputFocus(false)
    }


    return (
        <header className={c.header}>
            <div className='container'>
                <div className={c.header__wrapper}>
                    <div className={c.brand__logo__box}>
                        <a href="/">
                            <img className={c.brand__logo} src={brandLogo} alt="Brand Logo" />
                        </a>
                    </div>
                    <div className={c.user__location}>
                        <SlLocationPin className={c.location__icon}></SlLocationPin>
                        <div className={c.location__state}>
                            <p className={c.location__text}>{t("delivery__label")}</p> <strong>Uzbekistan</strong>
                        </div>
                    </div>
                    <div className={c.input__wrapper} onFocus={() => { setInputFocus(true) }} style={inputFocus ? { boxShadow: "1px 1px 10px 6px #ff9900" } : null}>
                        <form type="submit" className={c.input__form} onSubmit={submitForm}>
                            <select style={sectionValue.length <= 7 ? { width: `${sectionValue.length * 14}px` } : { width: `${sectionValue.length * 10}px` }} className={c.input__select} onChange={(e) => { setSectionValue(e.target.value) }}>
                                <option value="All">All</option>
                                <option value="Arts & Craft">Arts & Craft</option>
                                <option value="Automative">Automative</option>
                                <option value="Baby">Baby</option>
                            </select>
                            <input className={c.input__field} type="text" onBlur={(e) => { e.target.value = "" }} />
                            <button className={c.search__btn} onClick={() => { setInputFocus(false) }}>
                                <GrSearch className={c.serach__icon} ></GrSearch>
                            </button>
                        </form>
                    </div>
                    <div className={c.language__section} onMouseOver={() => {setLanguageFocus(true)}} onMouseLeave={() => {setLanguageFocus(false)}}>
                        <div className={c.language__select}>
                        <span>{selectedLanguage}</span>
                        <BiChevronDown />
                        </div>
                        <div className={languageFocus ? `${c.languages__wrapper} ${c.languages__active}` : `${c.languages__wrapper}`}>
                            <h3 className={c.language__text}>Change language</h3>
                            <ul className={c.language__list} onClick={changeWebsiteLang}>
                                <li className={c.language__sort} onClick={() => {setSelectedLanguage("en")}}>
                                    <label htmlFor="en">
                                        <input className={c.language__radio} type="radio" id='en' name='lang'/>
                                        English - EN
                                    </label>
                                </li>
                                <li className={c.language__sort} onClick={() => {setSelectedLanguage("uz")}}>
                                    <label className={c.language__radio} htmlFor="uz" name='lang'>
                                        <input type="radio" id='uz' name='lang'/>
                                        Uzbek - UZ
                                    </label>
                                </li>
                                <li className={c.language__sort} onClick={() => {setSelectedLanguage("en")}}>
                                    <label htmlFor="uz">
                                        <input className={c.language__radio} type="radio" id='uz' name='lang'/>
                                        Russian - RU
                                    </label>
                                </li>
                                <li className={c.language__sort} onClick={() => {setSelectedLanguage("uz")}}>
                                    <label htmlFor="uz">
                                        <input className={c.language__radio} type="radio" id='uz' name='lang'/>
                                        Portugal - PT
                                    </label>
                                </li>
                                <li className={c.language__sort} onClick={() => {setSelectedLanguage("en")}}>
                                    <label htmlFor="uz">
                                        <input className={c.language__radio} type="radio" id='uz' name='lang'/>
                                        DEUSTCH - DE
                                    </label>
                                </li>
                            </ul>
                            <p className={c.language__desc}>You are shopping on Amazon.com</p>
                        </div>
                    </div>
                    <div className={c.sign__in}>
                        <Link className={c.sign__inLink} to="/login">
                            {t("signIn__label")}
                            <div className={c.signing__select}>
                                <span>{t("account__list")}</span>
                                <BiChevronDown />
                            </div>
                        </Link>
                    </div>
                    <div className={c.anonym__box}>
                        {t("returns__label")}
                        <div className={c.anonym__text}> {t("order")}</div>
                    </div>
                    <div className={c.cart}>
                        <div className={c.cart__box}>
                            <HiOutlineShoppingCart className={c.cart__icon}></HiOutlineShoppingCart>
                            <span className={c.cart__num}>0</span>
                        </div>
                        <p className={c.cart__text}>{t("cart")}</p>
                    </div>
                </div>
            </div>
            {inputFocus && <Overlay type="navbar" state={inputFocus} callback={setInputFocus} />}
            {languageFocus && <Overlay type="navbar" state={languageFocus} callback={setLanguageFocus}/>}
        </header>
    )
}

export default HeaderTop