import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Add something");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item], console.log(items));
    setNewItem("");
  };

  const deleteItem = (id) => {
    const allItems = items.filter((item) => item.id !== id);
    setItems(allItems);
    console.log(allItems)
  };

  
  return (
    <div className="App">
      <h1>Todo List App</h1>

      <input
        type="text"
        placeholder="Add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{listStyleType: "none"}} >
            {item.value}
            <button onClick={() => deleteItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
