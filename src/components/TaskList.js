import React, {useState} from "react";
import Task from "./Task"

function TaskList({taskList, setTasks}) {

  //const [toDos, setToDos] = useState(taskList)

  function removeTask({text}){
    console.log(text)
    const updatedTodos = [...taskList].filter(toDo => toDo.text !== text)
    setTasks(updatedTodos)
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList.map(todo =>{
        return <Task key={todo.text} text={todo.text} category={todo.category} onTaskRemove={removeTask}/>
      })}
    </div>
  );
}

export default TaskList;
