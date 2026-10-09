import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBarMain from '../components/NavBarMain'
import hero from './../assets/hero.png'

export default function Home() {
  return (
    <>
      <NavBarMain/>
      <Header/>
      <h2 style={{textAlign:"center", color:"red"}}>Home Page</h2>
      <p style = {{textAlign:"center"}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, asperiores porro numquam consequuntur pariatur accusantium tempora sint. Quas at perferendis, totam quidem nisi provident odit, fugit enim quaerat esse illo.
      </p>
      {/* การแสดงรุปจาก public */}
      <img src="super.png" alt="" style={{width: "100px"}}/>
      {/* การแสดงรุปจาก assets */}
      <img src={hero} alt="" style={{width: "200px"}}/>

      <Footer/>
    </>
  )
}
