import React, { useState } from "react";
import './UseStateObject.css';
function UseStateObject() {
  const [users, setUsers] = useState({ name: "", age: "", occupation: "" });
  return (
    <>
      <form>
        <div className="py-5">
          <label className="px-2">Name:</label>
          <input
            type="text"
            value={users.name}
            onChange={(e) => setUsers({ ...users, name: e.target.value })}
          />
        </div>
        <div className="py-5">
          <label className="px-2">Age:</label>
          <input
            type="number"
            value={users.age}
            onChange={(e) => setUsers({ ...users, age: e.target.value })}
          />
        </div>
        <div className="py-5">
          <label className="px-2">Occupation:</label>
          <input
            type="text"
            value={users.occupation}
            onChange={(e) => setUsers({ ...users, occupation: e.target.value })}
          />
        </div>
      </form>
      <div>Your Name is: {users.name}</div>
      <div>Your Age is: {users.age}</div>
      <div>You are a: {users.occupation}</div>
    </>
  );
}

export default UseStateObject;
