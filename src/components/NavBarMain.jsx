import React from 'react'

export default function NavBarMain() {
  return (
    <>
      <div style ={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        padding:"15px",
        marginBottom:"50px",
        gap:"5px",
      }}>
        <a href="/" style={{color:"white"}}>HOME</a>
        <a href="/about" style={{color:"white"}}>ABOUT</a>
        <a href="/contact" style={{color:"white"}}>CONTACT</a>
        <a href="/product" style={{color:"white"}}>PRODUCT</a>
      </div>

    </>
  )
}
