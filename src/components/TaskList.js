import React from "react";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

function TaskList(props) {
  return (
    <div className="tasks">
      {props.tasks.map(task => <Task key = {task.text} task = {task} handleDelete= {props.handleDelete} />)}
    </div>
  );
}

export default TaskList;
