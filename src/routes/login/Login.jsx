import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import c from "./Login.module.css"
import { auth, provider } from '../../firebase/config'
import { FcGoogle } from 'react-icons/fc'
import brandLogo from "../../images/Amazon_logo.svg.png"
import Error from "./error-message/Error"


const Login = () => {
  const anotherPage = useHistory()
  const [userGmail, SetUserGmail] = useState("")
  const [password, setPassword] = useState("")
  const [possibleError, setPossibleError] = useState("")

  const loginUser = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(userGmail, password)
      .then(response => {
        if (response) {
          anotherPage.push("/")
        }
      })
      .catch(err => setPossibleError(err.message))
  }

  const loginWithPopup = () => {
    auth.signInWithPopup(provider)
      .then(response => console.log(response))
  }


  return (
    <>
      <div className={c.login__page}>
        <Link to="/">
          <img className={c.login__logoImage} src={brandLogo} alt="" />
        </Link>
        <div className={c.login__wrapper}>
          <div className={c.login__box}>
            <h1 className={c.login__title}>Sign in</h1>
            <form onSubmit={loginUser}>
              <label htmlFor="userDetail" className={c.login__label}>Email or mobile phone number</label>
              <input className={c.login__inputField} id="userDetail" type="text" required onChange={(e) => SetUserGmail(e.target.value)} />
              <label htmlFor="userPassword" className={c.login__label}>Password</label>
              <input className={c.login__inputField} type="password" id="userPassword" minLength={8} required onChange={(e) => setPassword(e.target.value)} />
              {possibleError && <Error errorText={possibleError} />}
              <button className={c.login__btn} type='submit'>Continue</button>
            </form>
            <p className={c.login__text}>By continuing, you agree to Amazons <a href="/login">Condition of use</a> and <a href="/login">Privacy Notice</a></p>
            <button className={c.login__withGoogle} onClick={loginWithPopup}>
              <FcGoogle />
              <span>Login with Google</span>
            </button>
          </div>
          <div className={c.login__signup}>
            <h6 className={c.login__newUser}>New to Amazon?</h6>
            <Link className={c.login__link} to="/login/signup">
              <button className={c.login__btnLink}>Create Your Amazon account</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login