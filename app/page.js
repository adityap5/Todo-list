"use client"
import React,{useState} from 'react'

const page = () => {
  const [Title, setTitle] = useState("");
  const [desc, setdesc] = useState("")
  const submitHandler = (e) => {
   e.preventDefault();
   console.log(Title);
   setTitle("");
   setdesc("");
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
  </>
  )
}

export default page
