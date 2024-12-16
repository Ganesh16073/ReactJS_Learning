import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>First React Project</h1>
      <header>
            <div class="logo">
                <h1>Company Name</h1>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">ContactUS</a></li>
                </ul>
            </div>
        </header>

    </>
  )
}

export default App
