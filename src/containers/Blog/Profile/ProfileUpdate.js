import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../../store/actions/index';

import { Form, Button } from 'reactstrap';
import Field from '../../../components/UI/Field/Field';
import Spinner from '../../../components/UI/Spinner/Spinner';


const fields = [{
        name: 'profile_picture',
        elementName: 'input',
        elementType: 'file',
        label: 'Profile Picture',
        placeholder: '',
        update: 'yes'
    },
    {
        name: 'profile_bg',
        elementName: 'input',
        elementType: 'file',
        placeholder: '',
        label: 'Background picture',
        update: 'yes'
    },
    {
        name: 'description',
        elementName: 'textarea',
        elementType: 'textarea',
        placeholder: 'Describe yourself',
        label: 'Description',
        update: 'yes'
    }
]

class ProfileUpdate extends Component {

    handleSubmit = () => {
        this.props.onProfileUpdate(this.props.values)
    }

    onProfileUpdateCancel = () => {
        this.props.history.push('/author/')
    }

    render() {
        const userId = +localStorage.getItem('userId')

        let form = <div className="text-center">
                <Spinner />
            </div>

        if (!this.props.authStart) {
        form = <div>
                <h5 className="text-light text-center">Update profile {this.props.users.filter(item => item.id === userId).map((user, i) => (<span key={i}>{user.username}</span>))}</h5>
                <Form onSubmit={this.handleSubmit}>
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
                            Update Profile
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
                    <Button onClick={this.onProfileUpdateCancel} style={{width: '100%', backgroundColor: 'rgba(126,203,244,1)', borderRadius: '8px'}}>
                        Cancel
                    </Button>
                </div>
            </div>
        );
    }
}

 const mapStateToProps = state => {
     return {
        users: state.post.users,
        authors: state.post.authors
     }
 }

 const mapPropsToDispatch = dispatch => {
     return {
        onProfileUpdate: (data) => dispatch(actions.initProfileUpate(data))
     }
 }

export default connect(mapStateToProps, mapPropsToDispatch)(withFormik({
    mapPropsToValues: () => ({
        profile_picture: '',
        profile_bg: '',
        description: 'testing'
    }),
    validationSchema: Yup.object().shape({
        profile_picture: Yup.string()
            .required('please upload an image!'),
        profile_bg: Yup.string()
            .required('please upload an image!'),
        description: Yup.string()
            .required('please describe yourself!')
            .min(30, 'you are noth that boring!')
            .max(300, 'save some for the article, hehe')
    })
})(ProfileUpdate));