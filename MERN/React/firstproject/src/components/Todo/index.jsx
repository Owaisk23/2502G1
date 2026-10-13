import React from 'react'
import { useState } from 'react'

const index = () => {
    const [list, setList] = useState([ "BMW", "Audi", "Accord"]);
    const [text, setText] = useState("");

    const addTodo = () => {
        if(text === ""){
            alert("Please enter a todo item");
            return;
        }
        setList([...list, text]);
        setText("");
    }

    const editTodo = (index) => {
        const updatedValue = prompt("Edit todo item", list[index]);
        const copyList = [...list];
        copyList[index] = updatedValue;
        setList(copyList);
    }

    const deleteTodo = (index) => {
        const copyList = [...list];
        copyList.splice(index, 1);
        setList(copyList);
    }

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default index

