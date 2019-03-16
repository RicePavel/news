var React = require("react");

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Menu} from "./Menu.jsx";

import {Login} from "./Login.jsx";
import {Main} from "./Main.jsx";
import {News} from "./News.jsx";
import {NotFound} from "./NotFound.jsx";
import {Profile} from "./Profile.jsx";

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {news:[
                ['Заголовок 1', 'Текст 1'],
                ['Заголовок 1', 'Текст 2']
        ]};
    }
    
    render() {
        return (<Router>
                <div>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/profile" component={Profile} />
                        <Route path="/news" render={(props) => <News {...props} news={this.state.news} />} />
                        <Route path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>);
    }
    
}

export {App};
