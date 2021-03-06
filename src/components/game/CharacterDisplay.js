import React from "react";

const CharacterDisplay = ({ character, gameOver }) => {
    let displayString = character.join("");
    if (!gameOver) {
        return (
            <div className="CharacterDisplay">
                <p>
                    <span className="active-letter">
                        {displayString.substring(0, 1).replace(" ", "_")}
                    </span>
                    {displayString.substring(1, displayString.length)}
                </p>
            </div>
        );
    } else {
        return (
            <div className="CharacterDisplay">
                <p>
                    ...
                </p>
            </div>
        );
    }
};

CharacterDisplay.defaultProps = {
    character: "A",
};

export default CharacterDisplay;
