import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count > 0) {
            document.title = `Value of count is ${count}`
        }
    }, [count]);
    return (
        <div>
            <button onClick={() => {setCount((prevCount) => prevCount + 1)}}>Increment</button>
            {count}
        </div>
    )
}

export default UseEffect
