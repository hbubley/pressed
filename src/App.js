import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./components/game/GameContainer";
import NavigationBar from "./components/Layout/NavigationBar";
import "./style.css";
import { Row, Container } from "react-bootstrap";
function App() {
    return (
        <Container fluid>
            <NavigationBar />
            <Game />
        </Container>
    );
}

export default App;
