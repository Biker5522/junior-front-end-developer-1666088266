import React, { useEffect, useState, useContext } from 'react'
import moment from 'moment'
import Face from '../icons/face.png'
import { Context } from './Context'
export default function BusinessContext() {
  const [activeBusinessTask, setActiveBusinessTask] = useState(null)
  const [context, setContext] = useContext(Context)
  const [businessTasks, setBusinessTasks] = useState([
    {
      id: 1,
      title: 'New Sprint, tasks and intro information',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      isNew: false,
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
      created_at: '2022-04-23T18:25:43.511Z',
      active: false,
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
      active: false,
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
      active: false,
      taskId: 3,
    },
  ])
  //Clear Active Business Task after changing task
  useEffect(() => {
    setActiveBusinessTask(null)
  }, [context])

  //OnClick set Active Task
  const HandleClick = (task) => (e) => {
    e.preventDefault()
    if (task.isNew) {
      task.isNew = false
    }
    businessTasks.forEach((x) => {
      x.active = false
    })
    task.active = true
    setActiveBusinessTask(task)
  }

  return (
    <div className="businessContext">
      <div className="headerMain">
        <h2>BUSINESS CONTEXT</h2>
      </div>
      <div className="businessMain">
        <div className="businessTasks">
          {/* Display business Tasks */}
          {businessTasks
            .filter((e) => e.taskId == context.id)
            .map((task, index) => {
              // New task
              if (task.isNew === true) {
                return (
                  <div
                    key={index}
                    className="businessTask"
                    onClick={HandleClick(task)}
                  >
                    <div>
                      <div className="newTask">New</div>
                      <p className="name">{task.author}</p>
                    </div>
                    <h3 className="newTaskTitle">{task.title}</h3>
                    <p>{task.body.substring(0, 60)}...</p>
                  </div>
                )
              } else if (task.isNew === false) {
                //Active Task
                if (task.active === true) {
                  return (
                    <div
                      key={index}
                      className="businessTask active"
                      onClick={HandleClick(task)}
                    >
                      <p className="name">{task.author}</p>
                      <h3>{task.title}</h3>
                      <p>{task.body.substring(0, 60)}...</p>
                    </div>
                  )
                } else {
                  return (
                    <div
                      key={index}
                      className="businessTask unactive "
                      onClick={HandleClick(task)}
                    >
                      <p className="name">{task.author}</p>
                      <h3>{task.title}</h3>
                      <p>{task.body.substring(0, 60)}...</p>
                    </div>
                  )
                }
              }
            })}
        </div>
        {/* Display information about a business task */}
        {activeBusinessTask != null && (
          <div className="businessBody">
            <h3>{activeBusinessTask.title}</h3>
            <div className="table">
              <div className="image">
                <img src={Face} />
              </div>
              <div className="description">
                <h4>
                  {activeBusinessTask.author}
                  {moment(activeBusinessTask.created_at).format(' Do ') ==
                    moment().format(' Do ') && <span> Today</span>}
                  {moment(activeBusinessTask.created_at).format(' Do MMMM')}
                  {'  '}
                  {moment(activeBusinessTask.created_at).format('h:mm')}
                </h4>
                <p>{activeBusinessTask.body}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
