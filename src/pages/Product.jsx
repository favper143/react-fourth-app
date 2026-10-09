import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBarMain from '../components/NavBarMain'
import ProductLink from './../components/ProductLink'

export default function Product() {
  return (
    <>
      <NavBarMain/>
      <Header />  
      <h2 style={{textAlign:"center", color:"red"}}>Product Page</h2>
      <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
        <ProductLink url="/product/computer" title = "COMPUTER"  bgColor ="#1486f0"/>
        <ProductLink url="/product/smartphone" title = "SMARTPHONE" bgColor = "#e9e51f" />
      </div>
      <p style = {{textAlign:"center"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, sunt rerum deserunt ea inventore maxime iusto deleniti eveniet fugiat recusandae nisi? Magni et laboriosam consectetur architecto repudiandae error temporibus amet?
      </p>
      <Footer/>
    </>
  )
}
