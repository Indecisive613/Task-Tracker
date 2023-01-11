import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault() //so it doesn't submit to a page?
        if(!text){
            alert('Please describe your task')
            return
        }

        onAdd({ text, day, time, reminder})

        //resets the form upon successful submission
        setText('')
        setDay('')
        setTime('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task <p style={{color:'red', display:'inline'}}>*</p></label>
            <input type='text' placeholder='Task Description' value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Day</label>
            <input type='text' placeholder='Add Date' value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Time</label>
            <input type='text' placeholder='Add Time' value={time} onChange={(e) => setTime(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block'></input>
    </form>
  )
}

export default AddTask