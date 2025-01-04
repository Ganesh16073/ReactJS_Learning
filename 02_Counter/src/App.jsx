
import {useState} from 'react'

export default function App() {

  let [count,setCount]= useState(15);
  // let counter=5

  const addValue=()=>
  {
    setCount(++count)
  }
  const subValue=()=>
  {
    if(count>0)
     setCount(--count)
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter Value: {count}</h2>

    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={subValue}>Remove Value</button>
    </>
  )
}
