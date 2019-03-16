var React = require("react");

import {Link} from "react-router-dom";

class Menu extends React.Component {
    
    render() {
        return (
                <div>
                    <Link to="/">Главная</Link>
                    <Link to="/profile">Профиль</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/login">Логин</Link>
                </div>
                );
    }
    
    /*
    render() {
        return (
                <div>
                    <a href="#">Главная</a>
                    <a href="#">Профиль</a>
                    <a href="#">Новости</a>
                    <a href="#">Логин</a>
                </div>
                );
    }
    */
    
}

export {Menu};