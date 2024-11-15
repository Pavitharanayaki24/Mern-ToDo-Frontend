import ToDo from "./component/ToDo";
import { useState } from "react";
import { useEffect } from "react";
import {getAllToDo,postToDo,updateTodo,deleteToDo} from "./utils/Hande";

function App() {
const [toDo,setToDo]=useState([])
const [text,setText]=useState("")
const [isUpdating,setisUpdating]=useState(false)
const [toDoId,setToDoId]=useState("")
useEffect(()=>{
  getAllToDo(setToDo)
},[])
const updateMode=(id,text)=>{
  setisUpdating(true)
  setText(text)
  setToDoId(id)
}
  return (
    <div className="App">
      <div className="container">
            <h1>ToDo App</h1>
            <div className="top">
              <input type="text" className="input" placeholder="Add a task.."
              value={text}
              onChange={(e)=>setText(e.target.value)}
              />
              
              <div 
              className="add" 
              onClick={isUpdating ? 
               ()=>updateTodo(toDoId,text,setToDo,setText,setisUpdating)
              :()=> postToDo(text,setText,setToDo)}>
                {isUpdating ? "Update" : "Add"}</div>

              </div>
              <div className="list">
                {toDo.map((item)=>
               <ToDo 
                key={item._id} 
                text={item.text}
                updateMode={()=>updateMode(item._id,item.text)}
                deleteToDo={()=>deleteToDo(item._id,setToDo)}
                />)}
                
             </div>
          </div>
      </div>
   
  );
}

export default App;
