var React = require("react");

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Menu} from "./Menu.jsx";

import {Login} from "./Login.jsx";
import {Main} from "./Main.jsx";
import {News} from "./News.jsx";
import {NotFound} from "./NotFound.jsx";
import {Profile} from "./Profile.jsx";
import {connect} from 'react-redux';

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
                    <Menu auth={this.props.auth} />
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/profile" render={(props) => <Profile auth={this.props.auth} />} />
                        <Route path="/news" render={(props) => <News {...props} news={this.state.news} />} />
                        <Route path="/login" render={(props) => <Login auth={this.props.auth} />} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>);
    }
    
}

const mapStateToProps = function(state) {
    return {
        auth: state.get('auth')
    };
}


export default connect(mapStateToProps)(App);

