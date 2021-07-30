import React, {useState, useEffect} from 'react'

function UseEffectIntialRun() {
    const [mouse, setMouse] = useState({x: '', y: ''});
    // empty array as second argument to run useEffect only at initial render
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', setMousePostion)
    }, []);

    const setMousePostion = (e) => {
        setMouse({x: e.clientX, y: e.clientY})
    }
    return (
        <div>
            Mouse Position x: {mouse.x},  y: {mouse.y}
        </div>
    )
}

export default UseEffectIntialRun
