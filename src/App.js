import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Routes from './routes/Routes'
import { Backtotop } from './utils'

const App = () => {
  return (
    <>
      <Header />
      <Routes />
      <Backtotop />
      <Footer />
    </>
  )
}

export default App