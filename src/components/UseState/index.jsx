import React, {useState} from 'react'

function UseState() {
    const initialState = 0;
    const [count, setcount] = useState(initialState);
    const increase = () => {
        setcount((prevState) => {
            return prevState + 1;
        });
    }
    const decrease = () => {
        setcount((prevState) => {
            return prevState - 1;
        });
    }
    const reset = () => {
        setcount(initialState);
    }
    return (
        <div>
            {count}
            <div>
                <button onClick={increase}>Increment</button>
                <button onClick={decrease}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default UseState
