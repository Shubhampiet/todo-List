import React from 'react'

const TaskList = (props) => {

    // Deleting selected Task
const handleDelTask=(customTask)=>{
    const newTaskList=props.task.filter((item)=>item !== customTask)
     props.setTask(newTaskList)
   }

  return (
    <div>
        {/* Showing selected tasks */}
{props.task.map((item, index)=>{    
 return( <div key={index}>  
  <h3>
{index + 1}.  {item}
<button onClick={() => handleDelTask(item)}>Del</button>
  </h3>
</div>)
})}
    </div>
  )
}

export default TaskList