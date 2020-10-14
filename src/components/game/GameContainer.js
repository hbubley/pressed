import React from "react";
import CharacterDisplay from "./CharacterDisplay";
import PlayerInput from "./PlayerInput";
import ErrorDisplay from "./ErrorDisplay";
import { KANYE_QUOTES, randomWord } from "../constants";
import { Container } from "react-bootstrap";

const GameContainer = () => {
    const generateRandomCharacter = () => {
        let index = Math.floor(Math.random() * KANYE_QUOTES.length);
        return KANYE_QUOTES[index];
    };

    const initialValue = randomWord();

    const [playerInput, setPlayerInput] = React.useState("");
    const [displayString, setDisplayString] = React.useState(
        initialValue.split("")
    );
    const [error, setError] = React.useState(0);
    const [wordCount, setWordCount] = React.useState(0);

    React.useEffect(() => {
        if (!displayString.length) {
            const newQuote = generateRandomCharacter();
            setDisplayString(newQuote.split(""));
        }

        const handleWordCount = (string) => {
            if (string[0] === " ") {
                setWordCount((count) => count + 1);
            }
        };

        handleWordCount(displayString);
    }, [displayString]);

    const handlePlayerInput = (e) => {
        const currentLetter = displayString[0];

        if (e.target.value === currentLetter) {
            let newString = displayString.splice(1, displayString.length);
            setDisplayString(newString);
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
                <p>Word count: {wordCount}</p>
            </div>
            <CharacterDisplay character={displayString} />
            <PlayerInput
                handleChange={handlePlayerInput}
                character={playerInput}
                inputRef={(input) => input && input.focus()}
            />
        </Container>
    );
};

export default GameContainer;
