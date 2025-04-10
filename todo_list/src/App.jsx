import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [tasktext, setTasktext] = useState('');
  
  
  const handlesubmit = (event) => {
    event.preventDefault();
    if (tasktext.trim() === '') return; 

    setTasklist([...tasklist, { textinfo: tasktext, complete: false ,isediting:false}]); 
    setTasktext('');
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasklist.map((task, i) =>
      i === index ? { ...task, complete: !task.complete } : task
    );
    setTasklist(updatedTasks);
  };
  const handledelete=(index)=>{
    const updatedTaskslist=[...tasklist];
    updatedTaskslist.splice(index,1);
  setTasklist(updatedTaskslist);
  }
  const handleEdit=(index)=>{
  const updatedlist=tasklist.map((task,i)=>
    i===index?{...task,isediting:true}:task
  );
  setTasklist(updatedlist);
  }
  const handlesave=(index,newtext)=>{
    const updatedlist=tasklist.map((task,i)=>
      i===index?{...task,textinfo:newtext,isediting:false}:task
    )
    setTasklist(updatedlist);
  }
  

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handlesubmit}>
        <input
        className='taskholder'
          type="text"
          placeholder="Enter your task here"
          value={tasktext}
          onChange={(e) => setTasktext(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="display">
        {tasklist.map((task, index) => (
          <Task 
            key={index} 
            textinfo={task.textinfo} 
            complete={task.complete}
            isediting={task.isediting}
            onToggle={() => toggleComplete(index)}
            onDel={()=>handledelete(index)}
              onEdit={()=>handleEdit(index)}
              onSave={(newtext)=>handlesave(index,newtext)}
            
          />
        ))}
      </div>
    </div>
  );
}

export default App;
