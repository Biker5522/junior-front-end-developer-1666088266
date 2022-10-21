import Check from '../icons/check.png'
import ToDo from '../icons/toDo.png'
import Lock from '../icons/lock.png'
import ArrowDown from '../icons/arrowDown.png'
import { Context } from './Context'
import React, { useEffect, useState, useContext } from 'react'

export default function TasksList() {
  const [context, setContext] = useContext(Context)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Hay, Hello',
      status: 'done',
      active: false,
    },
    {
      id: 2,
      title: 'Style Tasks List ',
      status: 'done',
      active: false,
    },
    {
      id: 3,
      title: 'Style business contexts tab',
      status: 'inProgress',
      active: false,
    },
    {
      id: 5,
      title: 'Student can browse tasks',
      status: 'inProgress',
      active: false,
    },
    {
      id: 6,
      title: 'Stuned can rowse business contexts',
      status: 'locked',
      active: false,
    },
  ])

  //OnClick set active tasks
  const HandleClick = (task) => (e) => {
    e.preventDefault()
    if (task.active == false && task.status != 'locked') {
      tasks.forEach((x) => {
        x.active = false
      })
      task.active = true
      setContext(task)
    }
  }

  return (
    <div className="tasksContainer">
      <div className="headerMain">
        <img className="yourTasksIcon" src={ArrowDown} alt="locked" />
        <h2>YOUR TASKS</h2>
      </div>
      {/* Display Tasks */}
      {tasks.map((task, index) => {
        // Done Tasks
        if (task.status === 'done') {
          return (
            <div
              key={index}
              className="task taskDone"
              onClick={HandleClick(task)}
            >
              <img className="taskIcon" src={Check} alt="Done" />
              <p>{task.title}</p>
            </div>
          )
          // Tasks in progress
        } else if (task.status === 'inProgress') {
          return (
            <div
              key={index}
              className="task taskInProgress "
              onClick={HandleClick(task)}
            >
              <img className="taskIcon" src={ToDo} alt="inProgress" />{' '}
              <p>{task.title}</p>
            </div>
          )
          //Locked Tasks
        } else if (task.status === 'locked') {
          return (
            <div key={index} className="task taskLocked">
              <img className="taskIcon" src={Lock} alt="locked" />
              <p>{task.title}</p>
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}
