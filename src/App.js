import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import theme from "./utils/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import GameContainer from "./components/GameContainer";
import NavigationBar from "./components/Layout/NavigationBar";
import "./style.scss";
import { Switch, Route, Link } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavigationBar />
            <Switch>
                <Route path="/game">
                    <GameContainer />
                </Route>
                <Route path="/">
                    <HomeContainer />
                </Route>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
