import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import brandLogo from "../../../images/Amazon_logo.svg.png"
import { auth } from "../../../firebase/config"
import Error from "../error-message/Error"
import c from "../Login.module.css"

const Signup = () => {


    const anotherPage = useHistory()
    const [userGmail, setUserGmail] = useState("")
    const [password, setPassword] = useState("")
    const [possibleError, setPossibleError] = useState("")

    const loginUser = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(userGmail, password)
            .then(response => {
                if (response) {
                    anotherPage.push("/")
                }
            })
            .catch(err => setPossibleError(err.message))
    }

    return (
        <>
            <div className={c.login__page}>
                <Link to="/">
                    <img className={c.login__logoImage} src={brandLogo} alt="" />
                </Link>
                <div className={c.login__wrapper}>
                    <div className={c.login__box}>
                        <h1 className={c.login__title}>Create account</h1>
                        <form onSubmit={loginUser}>
                            <label htmlFor="userDetail" className={c.login__label}>Email or mobile phone number</label>
                            <input className={c.login__inputField} id="userDetail" type="text" required onChange={(e) => setUserGmail(e.target.value)} />
                            <label htmlFor="userPassword" className={c.login__label}>Password</label>
                            <input className={c.login__inputField} type="password" id="userPassword" minLength={8} required onChange={(e) => setPassword(e.target.value)} />
                            {possibleError && <Error errorText={possibleError} />}
                            <button className={c.login__btn} type='submit'>Continue</button>
                        </form>
                        <p className={c.login__text}>By continuing, you agree to Amazons <a href="/login">Condition of use</a> and <a href="/login">Privacy Notice</a></p>
                        <span className={c.login__text}>
                            Already have an account? <Link to="/login">Sign in</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup