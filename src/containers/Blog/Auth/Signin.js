import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import * as actions from '../../../store/actions/index';
import {
    Form, Button
} from 'reactstrap';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Field from '../../../components/UI/Field/Field';

const fields = [
    {
        name: 'username',
        elementName: 'input',
        elementType: 'text',
        label: 'Username',
        placeholder: 'Enter your username'
    },
    {
        name: 'password',
        elementName: 'input',
        elementType: 'password',
        placeholder: 'Enter your password',
        label: 'Password'
    }
]

class Signin extends Component {

    signinFormHandler = (event) => {
        event.preventDefault();
        this.props.onAuthSignIn(this.props.values)
    }

    onSwitchHandler = () => {
        this.props.onSwitchSignInForm();
        this.props.history.push('/signup');
    }

    render() {
        let form = <div className="text-center">
                <Spinner />
            </div>

        if (!this.props.authStart) {
        form = <div>
                <h1 className="text-light text-left" style={{marginTop: '50px'}}>Welcome</h1>
                <h1 className="text-light text-left">Back</h1>
                <Form onSubmit={event => this.signinFormHandler(event)} style={{marginTop: '100px'}}>
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

export default connect(mapStateToProps, mapPropsToDispatch)(withFormik({
    mapPropsToValues: () => ({
        username: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('username is required!'),
        password: Yup.string()
            .required('password is required!')
    }),
    handleSubmit: (value, {setSubmitting}) => {
        this.props.onAuthSignIn(this.state.username, this.state.password)
    }
})(Signin));