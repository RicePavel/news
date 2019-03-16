var React = require("react");
import {BrowserRouter as Router, Redirect, Route, Link, Switch} from "react-router-dom";

class Profile extends React.Component {
    
    render() {
        
        var redirect = false;
        if (localStorage.getItem('auth') !== 'true') {
            redirect = true;
        }
        
        if (redirect) {
            return <Redirect to='/login'/>;
        } else {
            return (
                <div>
                    <div>Профиль</div>
                </div>);
        }
    }
    
}

export {Profile};
