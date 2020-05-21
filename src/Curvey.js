import React,{useEffect,useState} from 'react'

function Curvey({path,activationPressure=5}) {
  const [stroke, setStroke] = useState('white')
  const [fill, setFill] = useState('transparent')
  const [active, setActive] = useState(0)
  const [touches, setTouches] = useState({length:0})
  const [upward, setUpward] = useState(false)
  const [downward, setDownward] = useState(false)
  const [leftward, setLeftward] = useState(false)
  const [rightward, setRightward] = useState(false)
  const [pressure, setPressure] = useState({x:0,y:0}) // up/down, left/right
  const [pressed, setPressed] = useState(false)

  const press = event=>{
    setPressed(true)
    setStroke('limegreen')
  }
  
  const release = event=>{
    setPressed(false)
    setStroke('yellow')
  }

  const toggle = event=>{
    setActive(!active)
  }

  const move = event=>{
    if (pressed) {
      let moveX = event.movementX || 0
      let moveY = event.movementY || 0

      let pressureX = pressure.x + moveX
      let pressureY = pressure.y + moveY

      console.log(moveX,moveY)

      if (pressureX > activationPressure) pressureX = activationPressure
      if (pressureX < -activationPressure) pressureX = -activationPressure
      if (pressureY > activationPressure) pressureY = activationPressure
      if (pressureY < -activationPressure) pressureY = -activationPressure
      
      setPressure({x:pressureX,y:pressureY})
      setTouches(event.touches)
    }
  }

  useEffect(() => {
    setRightward(pressure.x >= activationPressure)
    setLeftward(pressure.x <= -activationPressure)
    setDownward(pressure.y >= activationPressure)
    setUpward(pressure.y <= -activationPressure)

    console.log(pressure,upward,rightward,downward,leftward)
  }, [pressure])
  
  useEffect(() => {
    setFill(active?'white':'transparent')
  }, [active])

  function Touch({key}){
    if (Number.isInteger(key)) {
      return <li>{JSON.stringify(touches[key])}</li>
    } else {
      return <></>
    }
  }

  function Touches(){
    if (touches && touches.length) {
      return <>{
        Object.keys(touches).forEach(key=>(
          <ul><Touch key={key} /></ul>
        )) 
      }</>
    } else {
      return <div>no touches</div>
    }
  }

  const translation = ()=>{
    return `translate(${pressure.x} ${pressure.y})`
  }

  return (
    <>
    <path 
      d={path}
      fill={fill}
      stroke={stroke}
      transform={translation()}
      onTouchStart={press}
      onTouchEnd={release}
      onTouchMove={move}
      onMouseDown={press}
      onMouseUp={release}
      onMouseMove={move}
      onClick={toggle}
    />
    {leftward && <text x="80" y="100" stroke="yellow">Left</text>}
    {rightward && <text x="120" y="100" stroke="yellow">Right</text>}
    {upward && <text x="100" y="80" stroke="yellow">Up</text>}
    {downward && <text x="100" y="120" stroke="yellow">Down</text>}
    <Touches />
    </>
  )
}

export default Curvey