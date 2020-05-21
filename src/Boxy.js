import React from 'react'

function Boxy() {
  const startX = 10
  const startY = 10

  const path = `
    M ${startX} ${startY}
    H 800
    V 380
    H 750
    L 700 430
    H ${startX}
    Z
  `

  return (
    <>
    <linearGradient id="myGradient" gradientTransform="rotate(-45)">
      <stop offset="5%"  stopColor="gold" />
      <stop offset="95%" stopColor="red" />
    </linearGradient>
    <path 
      d={path} 
      fill="transparent"
      stroke="url(#myGradient)"
    />
    </>
  )
}

export default Boxy
