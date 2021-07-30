import React, {useState, useEffect} from 'react'

function UseEffectCleanup() {
    const [mouse, setMouse] = useState({x: 0, y: 0});
    const mouseMoveEvent = (e) => {
        setMouse({x: e.clientX, y: e.clientY});
    }
    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveEvent)
        return () => {
            window.removeEventListener('mousemove', mouseMoveEvent)
        }
    }, [])
    return (
        <div>
            Mouse Postion x: {mouse.x}, y: {mouse.y}
        </div>
    )
}

export default UseEffectCleanup
