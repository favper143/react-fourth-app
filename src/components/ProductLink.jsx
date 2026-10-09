import React from 'react'

export default function ProductLink({url, title, bgColor}) {
  const a_link = {
    color:"white",
    textDecoration:"none",
    padding:"6px 10px",
    borderRadius:"5px",
    backgroundColor: bgColor,
  };
  return (
    <>
      <a href={url} style={a_link}>{title}</a>
    </>
  )
}
