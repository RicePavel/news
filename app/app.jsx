var ReactDOM = require("react-dom");
var React = require("react");

import {Menu} from "./components/Menu.jsx";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import {Login} from "./components/Login.jsx";
import {Main} from "./components/Main.jsx";
import {News} from "./components/News.jsx";
import {NotFound} from "./components/NotFound.jsx";
import {Profile} from "./components/Profile.jsx";
import {App} from "./components/App.jsx";





ReactDOM.render(
            <App/>,
            document.getElementById("app")
        )


