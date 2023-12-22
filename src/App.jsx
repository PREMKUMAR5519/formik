import { useState } from 'react'
import Home from './Home'

function App() {
  const[list,setList]=useState()
  console.log(list)

  return (
    <div>
      
      <Home/>
    </div>
  )
}

export default App
