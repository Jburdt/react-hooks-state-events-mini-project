import React, { useState } from "react";
import { TASKS } from "../data";


function NewTaskForm({categories, setTask, task}) {

  const [newTask, setNewTask] = useState("")
  const [select, setSelect] = useState("Code")


    function handleChange(e) {
      setNewTask(e.target.value)
    }

    function handleChangeSubmit(e) {
      setSelect(e.target.value)
    }

    function onTaskFormSubmit(e) {
      e.preventDefault()
      setTask([...task, {text: newTask, category: select}] )
      console.log(task)
    }

  // console.log(props)
  return (
    <form className="new-task-form" onSubmit= {onTaskFormSubmit} setTask={setTask}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={newTask} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChangeSubmit} value={select}>
          {categories.map(category => (
          <option value={category}>{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
