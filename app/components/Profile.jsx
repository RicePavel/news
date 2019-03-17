var React = require("react");
import {BrowserRouter as Router, Redirect, Route, Link, Switch} from "react-router-dom";

class Profile extends React.Component {
    
    render() {
        
        if (this.props.auth !== true) {
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
