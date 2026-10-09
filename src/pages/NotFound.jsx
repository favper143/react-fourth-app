import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBarMain from '../components/NavBarMain'

export default function NotFound() {
  return (
    <>
      <NavBarMainn/>
      <Header/>
      <h1 style={{textAlign:"center", color:"blue"}}>
        404 Page Not Found
      </h1>
      <Footer/>
    </>
  )
}
