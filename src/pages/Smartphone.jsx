import React from 'react'
import ProductHeader from '../components/ProductHeader'
import Footer from '../components/Footer'

export default function Smartphone() {
  return (
    <>
      <ProductHeader />
      <h2 style={{textAlign:"center", color:"red"}}>Smartphone Page</h2>
      <p style = {{textAlign:"center"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores explicabo praesentium repellat voluptate sed a! Ratione error reprehenderit tenetur dolorum porro similique eaque optio saepe, enim culpa necessitatibus cupiditate esse.
      </p>
      <Footer/>
    </>
  )
}
