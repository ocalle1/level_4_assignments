import React from 'react'
import UglyThings from './Components/UglyThings'
import { AxiosContextProvider } from './Context/AxiosContext'
import  Card  from './Components/Card'

function App() {
  
  
    return (
  <AxiosContextProvider>
  <UglyThings />
  <Card />
  </AxiosContextProvider>
    )
}

export default App