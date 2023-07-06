import React, {useState} from "react";

function NewTaskForm({categories, taskList, updateTaskList}) {
  const [userInput, setUserInput] = useState("")
  const [aCategory, setAcategory] = useState("")

  function handleClick(event){
    event.preventDefault();
    // console.log(`Look here: ${userInput}, ${aCategory}`)
    updateTaskList({userInput, aCategory, taskList})
  }
  return (
    <form className="new-task-form" onSubmit={handleClick}>
      <label>
        Details
        <input type="text" name="text" onChange={event => setUserInput(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => {setAcategory(event.target.value)}}>
          {/* render <option> elements for each category here */}
          {categories.map(category => {
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
