import './App.css';
import React, { useState } from 'react'
import { todoList } from './todoList.js'
import TaskList from './TaskList';

export default function App(){

const[task,setTask]=useState([])
const[customTask,setCustomTask]=useState("")

// Adding new Task
const handleAddTask=(item)=>{
  let taskItem=task.find((t)=>t===item)
  if(!taskItem)
setTask((prevArray) => [...prevArray, item]);
}

// Adding new Custom Task
const handleCustomTask=(customTask)=>{
  if(customTask.trim()===''){
    return;
  }
  handleAddTask(customTask)
  setCustomTask('')
}



  return(
    <div className='app'>
    <div>
{/* Todos Task List */}
<h1>Todos Task List </h1>
{
todoList.map((item,index)=>(
  <h3 key={index}>
{index+1}.  {item}
<button onClick={()=>handleAddTask(item)}>add</button>
  </h3>
))
}

{/* Custom Task */}
<div>
<input type='text' value={customTask} placeholder='enter your custom task' onChange={(event)=>setCustomTask(event.target.value)} style={{width:'200px'}}/>
<button onClick={()=>handleCustomTask(customTask)} style={{width:'50px'}}>add</button>
</div>
<h1>Your Todos Tasks are:</h1>

<TaskList task={task} setTask={setTask} />
</div>
    </div>
  )
}
