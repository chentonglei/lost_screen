import React, { useState } from 'react'
import './app.css'

export const AppContext = React.createContext({})

const App = (props) => {
  const [appData, setAppData] = useState({})
  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default App
