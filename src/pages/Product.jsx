import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Product() {
  return (
    <>
      <Header />  
      <h2 style={{textAlign:"center", color:"red"}}>Product Page</h2>
      <p style = {{textAlign:"center"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, sunt rerum deserunt ea inventore maxime iusto deleniti eveniet fugiat recusandae nisi? Magni et laboriosam consectetur architecto repudiandae error temporibus amet?
      </p>
      <Footer/>
    </>
  )
}
