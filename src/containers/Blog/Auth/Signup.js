import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import * as actions from '../../../store/actions/index';
import {
    Form, Button
} from 'reactstrap';

import Field from '../../../components/UI/Field/Field';
import Spinner from '../../../components/UI/Spinner/Spinner';

const fields = [{
        name: 'username',
        elementName: 'input',
        elementType: 'text',
        label: 'Username',
        placeholder: 'Enter your username'
    },
    {
        name: 'email',
        elementName: 'input',
        elementType: 'email',
        placeholder: 'Enter your email',
        label: 'Email'
    },
    {
        name: 'password1',
        elementName: 'input',
        elementType: 'password',
        placeholder: 'Enter your password',
        label: 'Password'
    },
    {
        name: 'password2',
        elementName: 'input',
        elementType: 'password',
        placeholder: 'Confirm your password',
        label: 'Confirm Password'
    }
]

class Signup extends Component {

    signupFormHandler = (event) => {
        event.preventDefault();
        this.props.onAuthSignUp(this.props.values)
    }
    
    onSwitchHandler = () => {
        this.props.onSwitchSignInForm();
        this.props.history.push('/signin');
    }
    
    render() {
        let form = <div className="text-center">
                <Spinner />
            </div>

        if (this.props.isSignInForm && !this.props.authStart) {
            form = <div>
            <h1 className="text-light text-left" style={{marginTop: '0px'}}>Create</h1>
            <h1 className="text-light text-left">Account</h1>
            <Form onSubmit={event => this.signupFormHandler(event)} style={{marginTop: '0px'}}>
                        {fields.map((field, i) => {
                        return (
                            <Field 
                                {...field}
                                {...this.props}
                                key={i}
                                value={this.props.values[field.name]}
                                name={field.name}
                                onChange={this.props.handleChange}/>
                        )
                    })}
                        <div className="text-center" style={{paddingTop: '10px'}}>
                            <Button type="submit" style={{width: '100%', backgroundColor: 'rgba(126,203,244,1)', borderRadius: '8px'}}>
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
        onAuthSignUp: (data) => dispatch(actions.initAuthSignUp(data)),
        onSwitchSignInForm: () => dispatch(actions.switchSignInForm())
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(withFormik({
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
                .email('Invalid email!')
                .required('email is required!'),
            password1: Yup.string()
                .required('password is required!')
                .min(6, 'should be 6 characters or more')
                .max(50, 'should be 50 characters or less'),
            password2: Yup.string()
                .required('password is required!')
        }),
        handleSubmit: (values, {setSubmitting}) => {
            this.onAuthSignUp(values)
        }
})(Signup));