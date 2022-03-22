import React from 'react'
import {useState} from "react";
import "./header.css"

const Header = () => {
  const [count, setCount] = useState(0)
  const increment=()=>{
    setCount(count => count + 1)
  }
  const reset=()=>{
    setCount(count => 0)
  }
  return (
    <div className='main_container'>
      <h1>Button Increment Example</h1>
      <button onClick={()=>increment()} className="btn">Inc</button>
      <button onClick={()=>reset()} className="btn">Reset</button>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default Header