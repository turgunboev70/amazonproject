import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Pdp from './pdp/Pdp'
import Product from './Product/Product'
import Signup from "./login/signup/Signup"
import Header from "../components/header/Header"
import { Backtotop } from '../utils'
import Footer from "../components/footer/Footer"
import Cart from './cart/Cart'

const Routes = () => {
    return (
        <div>
            <Route exact path="/">
                <Header/>
                <Home />
                <Backtotop/>
                <Footer/>
            </Route>
            <Route exact path="/exploremore">
                <Header/>
                <Product />
                <Backtotop/>
                <Footer/>
            </Route>
            <Route exact path="/exploremore/:id">
                <Header/>
                <Pdp />
                <Backtotop/>
                <Footer/>
            </Route>
            <Route exact path="/cartbox">
                <Header/>
                <Cart />
                <Backtotop/>
                <Footer/>
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route path="/login/signup">
                <Signup />
            </Route>
        </div>
    )
}

export default Routes