import React, { useState } from 'react';
import NavBar from '../NavBar';

function UseState_hook() {

  const [counter, setCounter] = useState(0);
  
  const handleSubmit = () => {
    setCounter(prev => prev + 1);
  }
  return (
    <>
    <NavBar/>
    <h1>useState hook in React</h1>
    <button className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white" 
    onClick={handleSubmit}>Click Me</button>  
    <p>Counter Value is : {counter}</p>
    </>
  )
}

export default UseState_hook