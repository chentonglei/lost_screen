import React, { useState } from 'react'
import './app.css'

export const AppContext = React.createContext({})

const App = (props) => {
  const [appData, setAppData] = useState()
  const [school, setSchool] = useState('全部学校')
  return (
    <AppContext.Provider value={{ appData, setAppData, school, setSchool }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default App
