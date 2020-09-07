import React from 'react'

const PlayerInput = ({handleChange, character, inputRef}) => {
    return (
        <div className='PlayerInput'>
            <input value={character} onChange={handleChange} style={{border: 'none'}} ref={inputRef} />
        </div>
    )
}

export default PlayerInput
