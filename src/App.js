import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
          id: 1,
          text: 'Reorganize Notes',
          day: 'November 31',
          time: '',
          reminder: false,
        },
        {
          id: 2,
          text: 'Christmas Shopping',
          day: 'December 4',
          time: '1:00pm',
          reminder: true,
        },
        {
          id: 4,
          text: 'Meet with friends',
          day: 'December 27',
          time: '2:30pm',
          reminder: false,
        },
        {
          id: 3,
          text: 'Air duct cleaning',
          day: 'Jan 4',
          time: '8:00am',
          reminder: true,
        },
        
    ]
  )

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random( )*10000 + 1)
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
    console.log(newTask)
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) //filters out the deleted task
    console.log('delete', id)
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id? {...task, reminder: !task.reminder}: task))
    console.log(id)
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask? <AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'All free!'}
    </div>
  );
}

export default App;
