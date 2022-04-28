import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import Post from "./components/post/Post";
import "./App.css";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/login" exact component={Login}>
                        <Login />
                    </Route>
                    <Route path="/join" exact component={Join}>
                        <Join />
                    </Route>
                    <Route path="/post" exact component={Post}>
                        <Post />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
export default App;
