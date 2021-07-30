import React, { useState } from "react";
import './UseStateArray.css';
function UseStateArray() {
  const [items, setItems] = useState([]);
  const addItems = () => {
    setItems([
      ...items,
      {
        id: Math.floor(Math.random() * 1000000000000000) + 1,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  const removeItem = (id) => {
      setItems((oldItems) => {
          let newItems = oldItems.filter((o) => o.id !== id);
          return newItems;
      })
  }
  return (
    <div>
      <button onClick={addItems}>Add More</button>
      <div>
        <ul>
          {items.map((item) => (
            <div className="list mb-2" key={item.id}>
              <li>{item.value}</li>
              <button className="ml-2" onClick={() => removeItem(item.id)}>remove</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UseStateArray;
