import React,{useState} from 'react'

function CircleButton() {
  const [color, setColor] = useState('yellow')
  const [fill, setFill] = useState('transparent')
  const [active, setActive] = useState(0)

  const press = event=>{
    console.log('down')
    setColor('limegreen')
  }
  
  const release = event=>{
    console.log('up')
    setColor('yellow')
  }

  const toggle = event=>{
    console.log('click')
    setActive(!active)
    setFill(active?'white':'transparent')
  }

  return (
    <circle cx="100" cy="100" r="50" 
      fill={fill}
      stroke={color}
      onTouchStart={press}
      onTouchEnd={release}
      onClick={toggle}
    />
  )
}

export default CircleButton
