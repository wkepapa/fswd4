import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Task({ textinfo, complete,isediting, onToggle,onDel,onEdit,onSave }) {
  const [newText, setNewText] = useState(textinfo);
  useEffect(() => {
    if (isediting) {
      setNewText(textinfo);
    }
  }, [isediting, textinfo]);
  return (
    <div className="task">
      {isediting?(<div>
        <input 
        className='taskhold'
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)}
        />
        <button onClick={() => onSave(newText)}>Save</button>
      </div>):(
        <div>
                <h2 className={complete ? "taskcompleted" : ""}>{textinfo}</h2>
                <input type="checkbox" className='checker' checked={complete} onChange={onToggle} />
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDel} >Delete</button>
                </div>
              
      )}
    </div>
  );
}

export default Task;
