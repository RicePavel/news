var React = require("react");

import {Redirect} from 'react-router-dom';
import {store} from '../reducer.jsx';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.authData = {login: 'Admin', password: '12345'};
        this.submitLogin = this.submitLogin.bind(this);
        this.state = {authResult: undefined};
    }
    
    submitLogin(e) {
        var login = this.refs.login.value;
        var password = this.refs.password.value;
        if (login === this.authData.login && password === this.authData.password) {
            store.dispatch({
                type: 'LOGIN'
            });
        } else {
            this.setState({authResult: 'false'});
        }
        e.preventDefault();
    }
    
    render() {
        
        var errorMessage = '';
        if (this.state.authResult === 'false') {
            errorMessage = <div>Имя пользователя или пароль введены неверно</div>;
        }
        
        if (this.props.auth === true) {
            return <Redirect to='/profile'/>;
        } else {
            return (<div>
                        <div>Логин</div>
                        {errorMessage}
                        <form onSubmit={this.submitLogin} >
                            <p>Логин: <input ref='login' type='text' name='login' /></p>
                            <p>Пароль: <input ref='password' type='password' name='password' /> </p>
                            <input type='submit' value='Отправить' />
                        </form>
                    </div>);
        }
    }
    
}

export {Login};