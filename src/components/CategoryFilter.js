import React, {useState} from "react";

function CategoryFilter({categories, filterSelected, setCategory}) {

  function handleSelected(event){
    filterSelected()
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category =>{
        return <button 
        key={category} className="" 
        onClick={(event) => (setCategory(event.target.innerText),event.target.className = "selected", handleSelected(event))} 
        onBlur={event=>(event.target.className="")}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
