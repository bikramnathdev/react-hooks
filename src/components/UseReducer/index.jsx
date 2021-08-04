import React, { useState, useReducer } from "react";
import Toaster from "../Toast";
const reducer = (state, action) => {
    const newPeople = [...state.people, action.payload];
    switch (action.type) {
        case "ADD_PEOPLE":
            return {...state, people:newPeople}
        case "EMPTY_VALUE": 
            return {...state, showToaster: true, toasterContent: "Fill the input"}
        case "CLOSE_TOASTER":
            return {...state, showToaster: false}
        default:
            return state;
    }
}
const defaultState = {
    people: [],
    showToaster : false,
    toasterContent: ''
}
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
        const person = { id: new Date().getTime().toString(), name };
        dispatch({type: "ADD_PEOPLE", payload: person});
        setName('');
    } else{
        dispatch({type: "EMPTY_VALUE"})
    }
  };
  const closeToaster = () => {
      dispatch({type: 'CLOSE_TOASTER'})
  }
  return (
    <div>
        {state.showToaster && <Toaster closeToaster={closeToaster} content={state.toasterContent}/>}
      <form
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "col",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {state.people.map((p) => (
          <div key={p.id}>{p.name}</div>
        ))}
      </div>
    </div>
  );
}

export default UseReducer;
