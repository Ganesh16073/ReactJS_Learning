import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [characterAllowed, setCharacterAllowed]=useState(false);
  const [password,setPassword]=useState("");
//  useCallback is used tostore the function or reference in catch for next operation it is used for optimization
  const  passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="1234567890"
    if(characterAllowed) str+="!@#$%^&*()_-+={}[]:;.,?/|~`";
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,characterAllowed,setPassword]);

  const copyPasswordToClickboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])

// useEffect is used to execute the logic if there is any change made then it execute automatically
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

// ref hook 
const passwordRef=useRef(null)

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-2'>
        <h1 className='text-white text-center py-2'>Password Changer</h1>
        <div className='flex flex-shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClickboard}>copy</button>
        </div>

        <div className='flex flex-wrap text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> setLength(e.target.value)} />
            <label >length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=> setNumberAllowed((prev)=> !prev)}/>
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={characterAllowed} id="characterInput" onChange={()=> setCharacterAllowed((prev)=> !prev)}/>
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
