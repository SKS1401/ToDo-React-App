import React from 'react'

const ShowTask = ({tasks}) => {
  return (
    
    <div className='task-box'>
       
        <ul>
              <h3>Your Pending Tasks</h3>
            {
                tasks.map((task,index) => {
                    return <li key={index}>{task}</li>

                })
            }
        </ul>
    </div>
  )
}

export default ShowTask
