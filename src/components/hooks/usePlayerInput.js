import { useState } from "react";

export default function () {
    const [input, setInput] = useState();

    const [nWrong, setNWrong] = useState();
    const [nCorrect, setNCorrect] = useState();
    const [displayString, setDisplayString] = useState();
    
    const handlePlayerInput = (e) => {
        e.preventDefault();
        if (e.target.value === displayString) {
        } else {
            let errorCount = error + 1;
            setNWrong(errorCount);
        }
        setInput("");
    };
}
