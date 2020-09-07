import React from "react";

const CharacterDisplay = ({ character }) => {
    return (
        <div className="CharacterDisplay">
            <p>{character}</p>
        </div>
    );
};
CharacterDisplay.defaultProps = {
    character: "A",
};
export default CharacterDisplay;
