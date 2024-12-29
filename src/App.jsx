import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='form'>
        <div className='container-input'>
          <input className='input' type="number" placeholder='altura' />
        </div>
        <div className='container-input'>
          <input className='input' type="number" placeholder='peso' />
        </div>
      </div>
      <div className='container-resultado'>
        <span className='resultado'>resultado</span>
      </div>
    </>
  )
}

export default App
