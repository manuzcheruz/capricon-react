import React, { Component } from 'react'
import { withFormik, Formik } from 'formik';
import { connect } from 'react-redux'
import axios from '../../../axios';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Editor } from '@tinymce/tinymce-react';
import * as Yup from 'yup';

import Spinner from '../../../components/UI/Spinner/Spinner';

class NewPosts extends Component {
    state = {
        loading: false,
        formIsValid: false
    }

    postHandler = event => {
        event.preventDefault()
        let article = {
            title: '',
            categories: [],
            author: '',
            content: '',
            thumbnail: '',
            featured: ''
        }
        axios.post('/rest/posts/', article)
            .then(response => {
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: true})
            })
    }

    
    render() {
        return (
            <Formik
                initialValues={{
                    title: '',
                    categories: '',
                    author: '',
                    content: '',
                    thumbnail: '',
                    featured: ''
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .min(1, 'Cannot be empty!')
                        .max(100, 'Must be 100 characters or less')
                        .required('Required'),
                    categories: Yup.string()
                        .oneOf(this.props.categories.title, 'Invalid category')
                        .required('Required'),
                    author: Yup.string()
                        .required('Required'),
                    content: Yup.string()
                        .min(1, 'Cannot be empty!')
                        .max(1000, 'Must be 1000 characters or less')
                        .required('Required'),
                    thumbnail: Yup.string()
                        .required('Required'),
                    featured: Yup.string()
                        .optional()
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 3000)
                }}
            >
            </Formik>
        )
    }
}

const mapStateToProps = state => {
    return {
        authors: state.authors,
        users: state.users,
        authorId: state.profileId,
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPosts)
