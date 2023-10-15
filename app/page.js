import React from 'react'

const page = () => {
  return (
  <>
  <h1>todo-list</h1>
  <form>
    <input className="in" type="text" placeholder="Enter Title here" />
    <input className="in" type="text" placeholder="Enter Description here" />
    <button className="btn1">Add Item</button>
  </form>
  </>
  )
}

export default page
