import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
// layout ko  outlet denge means jo component call kr rhe hai wo fix hai
// outlet me react router dom ki trf se autometically nesting ki ja skti hai
//nesting krne ke index.js gye  top level pr layout rakha hai
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default Layout
