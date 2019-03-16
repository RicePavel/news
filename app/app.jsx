var ReactDOM = require("react-dom");
var React = require("react");

import {Menu} from "./components/Menu.jsx";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


class Main extends React.Component {
    
    constructor(props) {
       super(props);
       this.message = 'Hello world!';
    }
    
    render() {
        return (
        <div>
            <Menu />
            <h1>{this.message}</h1>
        </div>);
    }
    
}

class Profile extends React.Component {
    
    render() {
        return (
                <div>
                    <Menu />
                    <div>Профиль</div>
                </div>);
    }
    
}

class News extends React.Component {
    
    render() {
        return (<div>
                    <Menu />
                    <div>Новости</div>
                </div>);
    }
    
}

class Login extends React.Component {
    
    render() {
        return (<div>
                    <Menu />
                    <div>Логин</div>
                </div>);
    }
    
}

class NotFound extends React.Component {
    
    render() {
        return (<div>Страница не найдена</div>);
    }
    
}

ReactDOM.render(
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/profile" component={Profile} />
                    <Route path="/news" component={News} />
                    <Route path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Router>,
            document.getElementById("app")
        )

/*
ReactDOM.render(
        <Main />,
        document.getElementById("app")
        );
*/
