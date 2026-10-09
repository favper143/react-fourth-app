import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBarMain from '../components/NavBarMain'

export default function Home() {
  return (
    <>
      <Header/>
      <h2 style={{textAlign:"center", color:"red"}}>Home Page</h2>
      <p style = {{textAlign:"center"}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, asperiores porro numquam consequuntur pariatur accusantium tempora sint. Quas at perferendis, totam quidem nisi provident odit, fugit enim quaerat esse illo.
      </p>
      <Footer/>
    </>
  )
}
