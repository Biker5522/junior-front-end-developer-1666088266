import './styles/App.css'
import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import TasksList from './components/TasksList'
import BusinessContext from './components/BusinessContext'
import moment from 'moment'
import { Context } from './components/Context'
function App() {
  useEffect(() => {}, [])
  const [context, setContext] = useState(null)
  return (
    <div className="App">
      <Header />
      <div className="mainView">
        <Context.Provider value={[context, setContext]}>
          <TasksList />
          <BusinessContext />
        </Context.Provider>
      </div>
    </div>
  )
}

export default App
