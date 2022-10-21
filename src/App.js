import './styles/App.css'
import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import TasksList from './components/TasksList'
import BusinessContext from './components/BusinessContext'
import moment from 'moment'
import { Context } from './components/Context'
function App() {
  useEffect(() => {}, [])
  const [context, setContext] = useState(1)
  return (
    <div className="App">
      <Header />
      <div className="mainView">
        {/*Set global task variable */}
        <Context.Provider value={[context, setContext]}>
          <TasksList />
          <BusinessContext />
        </Context.Provider>
        <Footer />
      </div>
    </div>
  )
}

export default App
