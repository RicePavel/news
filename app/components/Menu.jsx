var React = require("react");

import {Link} from "react-router-dom";

class Menu extends React.Component {
    
    logout() {
        
    }
    
    render() {
        
        var logoutLink = '';
        if (this.props.auth === true) {
            logoutLink = <a onClick={this.logout} href='#'>Выйти</a>;
        }
        
        return (
                <div>
                    <Link to="/">На главную</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/profile">Профиль</Link>
                    {logoutLink}
                </div>
                );
    }
    
}

export {Menu};