var React = require("react");

import {Link} from "react-router-dom";

class Menu extends React.Component {
    
    logout() {
        localStorage.removeItem('auth');
    }
    
    render() {
        
        var logoutLink = '';
        if (localStorage.getItem('auth') === 'true') {
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