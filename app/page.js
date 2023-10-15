"use client"
import React,{useState} from 'react'

const page = () => {
  const [Title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
   e.preventDefault();
   setmainTask([...mainTask ,{ Title, desc }])
   setTitle("");
   setdesc("");
   console.log(mainTask)
  }
const deleteHandler = (i) => {
 let copytask=[...mainTask];
 copytask.splice(i, 1);
 setmainTask(copytask);
}

  let renderTask = <h2>No Task Available</h2>
if (mainTask.length > 0) {
  renderTask= mainTask.map((t,i)=>{
    return (
    <div >
     <li className="oplist" key={i}>
     <h4>{t.Title}</h4>
     <h5>{t.desc}</h5>
     <button onClick={()=>{deleteHandler(i)}} className="btn2">Delete</button>
     </li>
    </div>
    );
     });
}

  return (
  <>
  <h1>todo-list</h1>
  <form onSubmit={submitHandler}>
    <input className="in" type="text" value={Title} onChange={(e)=>{
      setTitle(e.target.value)
    }} placeholder="Enter Title here" />
    <input className="in" type="text"value={desc} onChange={(e)=>{
      setdesc(e.target.value)}} placeholder="Enter Description here" />
    <button className="btn1">Add Task</button>
  </form>
  <hr />
  <div className="out">
    <ul>
      {renderTask}
    </ul>
  </div>
  </>
  )
}

export default page
