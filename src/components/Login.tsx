import React from "react";
import {AuthService} from '../services/AuthService'

interface LoginProps{
    authService: AuthService
}
interface LoginState{
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSuccessful: boolean
}
export class Login extends React.Component<LoginProps, LoginState>{

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSuccessful: false
    }

    render() {
        return (
            <div>
                <h2>Please Login</h2>
                <form>
                    <input value={this.state.userName} /><br/>
                    <input value={this.state.password} type='password'/><br/>
                    <input value='LOGIN' type='submit' />

                </form>
            </div>
        )
    }
}