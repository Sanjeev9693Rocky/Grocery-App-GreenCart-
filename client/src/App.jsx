
import { useState } from 'react'
import './App.css'
import Appp from './Appp'
import { useEffect } from 'react'
import Loading from './components/Loading'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  

  return (
    <>
      { loading ? <Loading/> : <Appp />}
    </>
  )
}

export default App
