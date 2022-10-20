import Check from '../icons/check.png'
import ToDo from '../icons/toDo.png'
import Lock from '../icons/lock.png'
import ArrowDown from '../icons/arrowDown.png'

import React, { useEffect, useState } from 'react'

export default function TasksList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Hay, Hello',
      status: 'done',
    },
    {
      id: 2,
      title: 'Style Tasks List ',
      status: 'done',
    },
    {
      id: 3,
      title: 'Style business contexts tab',
      status: 'inProgress',
    },
    {
      id: 5,
      title: 'Student can browse tasks',
      status: 'inProgress',
    },
    {
      id: 6,
      title: 'Stuned can rowse business contexts',
      status: 'locked',
    },
    {
      id: 7,
      title: 'Deploy App',
      status: 'locked',
    },
    {
      id: 8,
      title: 'Thank You!',
      status: 'locked',
    },
  ])
  return (
    <div className="tasksContainer">
      <div className="headerMain">
        <img className="yourTasksIcon" src={ArrowDown} alt="locked" />
        <h2>YOUR TASKS</h2>
      </div>
      {tasks.map((task, index) => {
        if (task.status === 'done') {
          return (
            <div key={index} className="task taskDone">
              <img className="taskIcon" src={Check} alt="Done" />
              <p>{task.title}</p>
            </div>
          )
        } else if (task.status === 'inProgress') {
          return (
            <div key={index} className="task taskInProgress">
              <img className="taskIcon" src={ToDo} alt="inProgress" />{' '}
              <p>{task.title}</p>
            </div>
          )
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
