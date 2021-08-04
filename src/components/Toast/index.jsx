import React, {useEffect} from 'react'

const Toaster = ({content, closeToaster}) =>  {
    useEffect(() => {
        setTimeout(() => {
            closeToaster();
        }, 3000);
    })
    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            {content}
        </div>
    )
}

export default Toaster
