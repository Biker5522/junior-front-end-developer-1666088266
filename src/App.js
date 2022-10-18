import './styles/App.css'
import React, { useEffect, useState } from 'react'
import Check from './icons/check.png'
import ToDo from './icons/toDo.png'
import Lock from './icons/lock.png'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Do something...',
      status: 'done',
    },
    {
      id: 2,
      title: 'Complete me ',
      status: 'done',
    },
    {
      id: 3,
      title: 'Change Color',
      status: 'inProgress',
    },
    {
      id: 5,
      title: 'Create div',
      status: 'inProgress',
    },
    {
      id: 5,
      title: 'Hidde div',
      status: 'locked',
    },
  ])

  useEffect(() => {}, [])

  return (
    <div className="App">
      <div className="tasksContainer">
        <h2>ToDo's</h2>
        {tasks.map((task, index) => {
          if (task.status === 'done') {
            return (
              <div key={index} className="task taskDone">
                <img className="taskIcon" src={Check} />
                <p>{task.title}</p>
              </div>
            )
          } else if (task.status === 'inProgress') {
            return (
              <div key={index} className="task taskInProgress">
                <img className="taskIcon" src={ToDo} /> <p>{task.title}</p>
              </div>
            )
          } else if (task.status === 'locked') {
            return (
              <div key={index} className="task taskLocked">
                <img className="taskIcon" src={Lock} />
                <p>{task.title}</p>
              </div>
            )
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

export default App
