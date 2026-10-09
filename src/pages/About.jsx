import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function About() {
  return (
    <>
      <Header/>
      <h2 style={{textAlign:"center", color:"red"}}>About Page</h2>
      <p style = {{textAlign:"center"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolorem ad explicabo quas quasi earum tempora porro blanditiis esse minima assumenda rem nisi, vitae debitis eveniet nobis voluptatem hic? Aspernatur!
      </p>
      <Footer/>
    </>
  )
}
