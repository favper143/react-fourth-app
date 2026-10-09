import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBarMain from '../components/NavBarMain'

export default function Contact() {
  return (
    <>
      <NavBarMain/>
      <Header/>
      <h2 style={{textAlign:"center", color:"red"}}>Contact Page</h2>
      <p style = {{textAlign:"center"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam pariatur iure quos aperiam. Tempora ea praesentium officiis, dicta velit, obcaecati omnis autem at officia reprehenderit voluptatem! Necessitatibus sit hic tenetur.
      </p>
      <Footer/>
    </>
  )
}
