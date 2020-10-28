import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import * as actions from '../../../store/actions/index';
import {
    Form, FormGroup, Label, Input, Button
} from 'reactstrap';

import Spinner from '../../../components/UI/Spinner/Spinner';

class Signup extends Component {
    componentDidMount () {
        this.props.onAuthSignIn()
    }

    onSwitchHandler = () => {
        this.props.onSwitchSignInForm();
    }

    render() {
        let form = <div className="text-center">
                <Spinner />
            </div>

        if (!this.props.isSignInForm && !this.props.authStart) {
            form = <div>
            <h1 className="text-light text-left" style={{marginTop: '0px'}}>Create</h1>
            <h1 className="text-light text-left">Account</h1>
            <Form style={{marginTop: '0px'}}>
                        <FormGroup>
                            <Label className="text-light">
                                Username
                            </Label>
                            <Input type="text" required name="title" placeholder="Enter your username" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="text-light">
                                Email
                            </Label>
                            <Input type="email" required name="title" placeholder="Enter your email" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="text-light">
                                Password
                            </Label>
                            <Input type="password" required name="password1" placeholder="Enter your password" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="text-light">
                                Confirm Password
                            </Label>
                            <Input type="password" required name="password2" placeholder="Confirm your password" />
                        </FormGroup>
                        <div className="text-center" style={{paddingTop: '10px'}}>
                            <Button style={{width: '100%', backgroundColor: 'rgba(126,203,244,1)', borderRadius: '8px'}}>
                                Sign Up
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
        onAuthSignIn: () => dispatch(actions.initAuth()),
        onSwitchSignInForm: () => dispatch(actions.switchSignInForm())
    }
}

const validationRulesSignUp = () => {
    return {
        mapPropsToValues: () => ({
            username: '',
            email: '',
            password1: '',
            password2: ''

        }),
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .min(3, 'should be 3 characters or more')
                .max(50, 'should be 50 characters or less')
                .required('username is required!'),
            email: Yup.string()
                .required('email is required!'),
            password: Yup.string()
                .required('password is required!'),
            password2: Yup.string()
                .required('password is required!')
        })
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(withFormik({validationRulesSignUp})(Signup));