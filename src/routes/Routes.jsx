import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Pdp from './pdp/Pdp'
import Product from './Product/Product'
import Signup from "./login/signup/Signup"

const Routes = () => {
    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route path="/login/signup">
                <Signup />
            </Route>
            <Route exact path="/exploremore">
                <Product />
            </Route>
            <Route exact path="/exploremore/:id">
                <Pdp />
            </Route>
        </div>
    )
}

export default Routes