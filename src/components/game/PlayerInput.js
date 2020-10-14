import React from 'react'

const PlayerInput = ({handleChange, character, inputRef}) => {
    return (
     
            <input value={character} onChange={handleChange} style={{border: 'none'}} ref={inputRef} />

    )
}

export default PlayerInput
