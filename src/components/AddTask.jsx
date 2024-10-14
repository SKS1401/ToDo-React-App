
import { useState } from 'react';
import './styles.css'
import ShowTask from './ShowTask';

const AddTask = () => {
 const [items,setitems]=useState([]);
 const [newItem,setnewItem]=useState('');
 const Onchange=(e)=> {
  setnewItem(e.target.value);
 }
 const AddItem=()=> {
  if(!newItem)
    return;
  else
  {
    setitems([...items,newItem]);
    setnewItem('');
  }
 }

    
  return (
    <div>
      <input className="input" value={newItem} onChange={Onchange}   type="text-area" placeholder="Type your Task" />
      <button className="b1" onClick={AddItem} > Add</button>
      <ShowTask tasks={items} />
      
    </div>
  );
}

export default AddTask
