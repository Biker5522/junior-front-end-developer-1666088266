import React, { useEffect, useState, useContext } from 'react'
import moment from 'moment'
import { Context } from './Context'
export default function BusinessContext() {
  const [context, setContext] = useContext(Context)
  const [businessTasks, setBusinessTasks] = useState([
    {
      id: 1,
      title: 'New Sprint, tasks and intro information',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      isNew: true,
      author: 'Olga Nelson',
      created_at: Date.now(),
      active: false,
      taskId: 1,
    },
    {
      id: 2,
      title: 'Aplication has been accepted ',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isNew: false,
      author: 'Olga Nelson',
      created_at: Date.now(),
      active: true,
      taskId: 1,
    },
    {
      id: 3,
      title: 'Style business contexts tab',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      isNew: true,
      author: 'Juan Pablo',
      created_at: Date.now(),
      taskId: 2,
      active: false,
    },
    {
      id: 4,
      title: 'Style business contexts tab',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
      isNew: false,
      author: 'Juan Pablo',
      created_at: Date.now(),
      taskId: 1,
      active: false,
    },
    {
      id: 5,
      title: 'Aplication has been accepted ',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isNew: false,
      author: 'Olga Nelson',
      created_at: Date.now(),
      active: true,
      taskId: 2,
    },
    {
      id: 6,
      title: 'Aplication has been accepted ',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isNew: false,
      author: 'Olga Nelson',
      created_at: Date.now(),
      active: true,
      taskId: 3,
    },
  ])
  return (
    <div className="businessContext">
      {console.log(context.id)}
      <div className="headerMain">
        <h2>BUSINESS CONTEXT</h2>
      </div>
      <div className="businessMain">
        <div className="businessTasks">
          {businessTasks
            .filter((e) => e.taskId == context.id)
            .map((task, index) => {
              if (task.isNew === true) {
                return (
                  <div key={index} className="businessTask">
                    <div>
                      <div className="newTask">New</div>
                      <p className="name">{task.author}</p>
                    </div>
                    <h3>{task.title}</h3>
                    <p>{task.body.substring(0, 60)}...</p>
                  </div>
                )
              } else if (task.isNew === false) {
                if (task.active === true) {
                  return (
                    <div key={index} className="businessTask active">
                      <p className="name">{task.author}</p>
                      <h3>{task.title}</h3>
                      <p>{task.body.substring(0, 60)}...</p>
                    </div>
                  )
                } else {
                  return (
                    <div key={index} className="businessTask unactive">
                      <p className="name">{task.author}</p>
                      <h3>{task.title}</h3>
                      <p>{task.body.substring(0, 60)}...</p>
                    </div>
                  )
                }
              } else return null
            })}
        </div>
        <div className="businessBody">
          <h3>{businessTasks[1].title}</h3>
          <h4>
            {businessTasks[1].author}
            {moment(businessTasks[1].date).format(' Do MMMM')}
            {'  '}
            {moment(businessTasks[1].date).format('h:mm')}
          </h4>
          <p>{businessTasks[1].body}</p>
        </div>
      </div>
    </div>
  )
}
