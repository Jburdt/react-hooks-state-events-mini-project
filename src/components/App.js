import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {

  const [category, setCategory] = useState("All")
  const [task, setTask] = useState(TASKS)
  

  const visbileTasks = task.filter(task => category === "All" || task.category === category)

  const filteredCategories = CATEGORIES.filter((category) => {
    return category !== "All" 
  })
  
  function handleDelete(clickedItem) {
    const deletedTask = task.filter((item) => {if (item.text !== clickedItem)
    return item})
    setTask(deletedTask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES = {CATEGORIES} category= {category} setCategory = {setCategory}/>
      <NewTaskForm categories = {filteredCategories} setTask= {setTask} task = {task} />
      <TaskList tasks = {visbileTasks} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
