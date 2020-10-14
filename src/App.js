import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./utils/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Game from "./components/game/GameContainer";
import NavigationBar from "./components/Layout/NavigationBar";
import "./style.css";
import { Container } from "react-bootstrap";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container fluid>
                <NavigationBar />
                <Game />
            </Container>
        </ThemeProvider>
    );
}

export default App;
