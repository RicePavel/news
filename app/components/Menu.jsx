var React = require("react");

import {Link} from "react-router-dom";
import {store} from "../reducer.jsx";

import styles from "../styles.js";

class Menu extends React.Component {
    
    logout() {
        store.dispatch({type: 'LOGOUT'});
    }
    
    render() {
        
        var logoutLink = '';
        if (this.props.auth === true) {
            logoutLink = <a style={styles.navLink} onClick={this.logout} href='#'>Выйти</a>;
        }
        
        return (
                <div>
                    <Link style={styles.navLink} to="/">На главную</Link>
                    <Link style={styles.navLink} to="/news">Новости</Link>
                    <Link style={styles.navLink} to="/profile">Профиль</Link>
                    {logoutLink}
                </div>
                );
    }
    
}

export {Menu};