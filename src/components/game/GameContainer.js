import React from "react";
import CharacterDisplay from "./CharacterDisplay";
import PlayerInput from "./PlayerInput";
import ErrorDisplay from "./ErrorDisplay";
import { KANYE_QUOTES, randomWord } from "../../utils/constants";
import { Col, Container, Form } from "react-bootstrap";
import { Paper } from "@material-ui/core";

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
    const [gameOver, setGameOver] = React.useState(false);
    const [startTime, setStartTime] = React.useState(0);
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

    React.useEffect(() => {
        if (!startTime) {
            setStartTime(() => new Date().getTime());
        }
        const handleGameOver = (err) => {
            if (err === 6) {
                alert("Game Over!");
            }
        };
        handleGameOver(error);
    }, [error, startTime]);

    const handlePlayerInput = (e) => {
        const currentLetter = displayString[0];

        if (e.target.value === currentLetter) {
            let newString = displayString.splice(1, displayString.length);
            setDisplayString(newString);
        } else {
            setError((err) => err + 1);
        }
        setPlayerInput("");
    };

    return (
        <Container className="GameContainer">
            <Paper>
                <ErrorDisplay errorCount={error} />
            </Paper>
            <CharacterDisplay character={displayString} />
            <Form.Control
                className="CharacterInput"
                value={playerInput}
                onChange={handlePlayerInput}
                ref={(input) => input && input.focus()}
            />
        </Container>
    );
};

export default GameContainer;
