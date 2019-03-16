var React = require("react");

import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.authData = {login: 'Admin', password: '12345'};
        this.state = {authResult: undefined};
        this.submitLogin = this.submitLogin.bind(this);
    }
    
    submitLogin() {
        var login = this.refs.login.value;
        var password = this.refs.password.value;
        if (login === this.authData.login && password === this.authData.password) {
            localStorage.setItem('auth', 'true');
            this.setState({authResult: true});
        } else {
            this.setState({authResult: false});
        }
    }
    
    render() {
        
        var redirect = false;
        if (localStorage.getItem('auth') === 'true' || this.state.authResult === true) {
            redirect = true;
        }
        
        if (redirect) {
            return <Redirect to='/profile'/>;
        } else {
            return (<div>
                        <div>Логин</div>
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