import React from 'react'

export default function ParentCom() {
    const handleClick = (e) => {
        console.log('Click:' + e.target.innerText);
    }
    return (
        <div>
            <h1>Render Props</h1>
            <button type='button' onClick={handleClick}>Click</button>
        </div>
    )
}
