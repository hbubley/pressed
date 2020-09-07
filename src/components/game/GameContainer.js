import React from "react";
import CharacterDisplay from "./CharacterDisplay";
import PlayerInput from "./PlayerInput";
import ErrorDisplay from "./ErrorDisplay";
import MatchDisplay from "./MatchDisplay";
import { Container, Row, Col } from "react-bootstrap";

const GameContainer = () => {
    const characterArray = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "{",
        "}",
        "|",
        "&",
    ];

    const generateRandomCharacter = () => {
        let index = Math.floor(Math.random() * characterArray.length);
        return characterArray[index];
    };

    const initialValue = generateRandomCharacter();

    const [playerInput, setPlayerInput] = React.useState("");
    const [displayCharacter, setDisplayCharacter] = React.useState(
        initialValue
    );
    const [match, setMatch] = React.useState(0);
    const [error, setError] = React.useState(0);

    const handlePlayerInput = (e) => {
        e.preventDefault();
        if (e.target.value === displayCharacter) {
            let matchCount = match + 1;
            let newLetter = generateRandomCharacter();
            setMatch(matchCount);
            setDisplayCharacter(newLetter);
        } else {
            let errorCount = error + 1;
            setError(errorCount);
        }
        setPlayerInput("");
    };

    return (
        <Container className="GameContainer">
            <div className="Outcomes">
                <ErrorDisplay errorCount={error} />
                <MatchDisplay matchCount={match} />
            </div>
            <CharacterDisplay character={displayCharacter} />
            <PlayerInput
                handleChange={handlePlayerInput}
                character={playerInput}
                inputRef={(input) => input && input.focus()}
            />
        </Container>
    );
};

export default GameContainer;
