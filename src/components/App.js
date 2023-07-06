import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  
  const [selCategory, setCategory] = useState("")
  const [selTasks, setTasks] = useState(TASKS)

  function selectCategory(){
    console.log(selCategory)
    // let updatedCatagory = event.target.innerText
    // setCategory(updatedCatagory)
    if(selCategory === "All"){
      setTasks(TASKS)
    }else{
      setTasks([...TASKS].filter(task => task.category === selCategory))
    }
  }

  function updateTaskList({userInput, aCategory, taskList}){
    let taskObj = {text:userInput, category:aCategory}
    let updatedTaskList = [...taskList, taskObj]
    setTasks(updatedTaskList)
  }
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* pass down categories to category filter */}
      <CategoryFilter categories={CATEGORIES} filterSelected={selectCategory} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} taskList={selTasks} updateTaskList={updateTaskList}/>
      <TaskList taskList={selTasks} setTasks={setTasks} updateTaskList={updateTaskList}/>
    </div>
  );
}

export default App;
