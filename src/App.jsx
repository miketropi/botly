import { useState } from 'react'
import Botly from './components/Botly'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Botly />
    </>
  )
}

export default App
