import React from 'react'
import ProductHeader from '../components/ProductHeader'
import Footer from '../components/Footer'

export default function Computer() {
  return (
    <>
      <a href="/product" style={{textDecoration:"none"}}>
        <ProductHeader />
      </a>
      <h2 style={{textAlign:"center", color:"red"}}>Computer Page</h2>
      <p style = {{textAlign:"center"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam sunt similique perspiciatis error nam eveniet maiores, magnam corrupti doloribus pariatur expedita magni? Placeat ex incidunt repellendus velit, distinctio inventore.
      </p>
      <Footer/>
    </>
  )
}
