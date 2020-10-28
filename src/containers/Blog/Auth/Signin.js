import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import {
    Form, FormGroup, Label, Input, Button
} from 'reactstrap';

import Spinner from '../../../components/UI/Spinner/Spinner';

class Signin extends Component {
    state = {
        username: '',
        password: ''
    }

    signinFormHandler = (event) => {
        event.preventDefault();
        this.props.onAuthSignIn(this.state.username, this.state.password)
    }

    onSwitchHandler = () => {
        this.props.onSwitchSignInForm();
    }

    usernameChangeHandler = event => {
        this.setState({
            username: event.target.value
        })
    }

    passwordChangeHandler = event => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        let form = <div className="text-center">
                <Spinner />
            </div>

        if (!this.props.authStart) {
        form = <div>
                <h1 className="text-light text-left" style={{marginTop: '50px'}}>Welcome</h1>
                <h1 className="text-light text-left">Back</h1>
                <Form onSubmit={(event) => this.signinFormHandler(event)} style={{marginTop: '100px'}}>
                    {/* need to loop through this form input to enhnace DRY code */}
                            <FormGroup>
                                <Label className="text-light">
                                    Username
                                </Label>
                                <Input 
                                    type="text" 
                                    required 
                                    value={this.state.username}
                                    onChange={(event) => this.usernameChangeHandler(event)}
                                    name="username"
                                    id="username"
                                    placeholder="Enter your username" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-light">
                                    Password
                                </Label>
                                <Input 
                                    type="password" 
                                    required 
                                    value={this.state.password}
                                    onChange={(event) => this.passwordChangeHandler(event)}
                                    name="password" 
                                    id="password"
                                    placeholder="Enter your password" />
                            </FormGroup>
                            <div className="text-center" style={{paddingTop: '10px'}}>
                                <Button style={{width: '100%', backgroundColor: 'rgba(126,203,244,1)', borderRadius: '8px'}}>
                                    Login
                                </Button>
                            </div>
                </Form>
            </div>
        }

        return (
            <div style={{padding: '10px', height: '100%'}}>
                {form}
                <h5 className="text-light text-center" style={{marginTop: '10px'}}>or</h5>
                <div className="text-center" style={{paddingTop: '10px'}}>
                    <Button onClick={this.onSwitchHandler} style={{width: '100%', backgroundColor: 'rgba(126,203,244,1)', borderRadius: '8px'}}>
                        {this.props.isSignInForm ? 'Sign Up' : 'Login'}
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authStarted: state.auth.authStart,
        isSignInForm: state.auth.switchForm !== null
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onAuthSignIn: (username, password) => dispatch(actions.initAuth(username, password)),
        onSwitchSignInForm: () => dispatch(actions.switchSignInForm())
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(Signin);