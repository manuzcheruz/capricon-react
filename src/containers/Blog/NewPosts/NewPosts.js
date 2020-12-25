import React, { Component } from 'react'
import { withFormik } from 'formik';
import { connect } from 'react-redux'
import { Form, Button } from 'reactstrap'
import * as Yup from 'yup';
import * as actions from '../../../store/actions/index';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Field from '../../../components/UI/Field/Field';

const fields = [{
        name: 'title',
        elementName: 'input',
        elementType: 'text',
        label: 'Title',
        placeholder: 'Enter your title'
    },
    {
        name: 'category',
        elementName: 'select',
        elementType: '',
        placeholder: '',
        label: 'Category'
    },
    {
        name: 'thumbnail',
        elementName: 'input',
        elementType: 'file',
        placeholder: '',
        label: 'Thumbnail'
    },
    {
        name: 'featured',
        elementName: 'input',
        elementType: 'checkbox',
        placeholder: 'feature article?',
        label: 'Featured'
    },
    {
        name: 'content',
        elementName: 'editor',
        elementType: '',
        placeholder: 'Enter your content here',
        label: 'Content'
    }
]

class NewPosts extends Component {

    postHandler = event => {
        event.preventDefault()
        this.props.values.categories = '1'
        this.props.values.content = 'just testing'
        console.log(this.props.values);
        this.props.onCreateNewPost(this.props.values);
    }

    render() {
        console.log(this.props.values);

        let form = <div className="text-center">
                <Spinner />
            </div>

        if (!this.props.authStart) {
        form = <div>
                <h5 className="text-light text-center">Create an article {this.props.author.map(author => (<span key={author.user.username}>{author.user.username}</span>))}</h5>
                <Form onSubmit={e => this.postHandler(e)}>
                    {fields.map(field => {
                        return (
                            <Field 
                                {...field}
                                {...this.props}
                                key={field.name}
                                value={this.props.values[field.name]}
                                name={field.name}
                                onChange={this.props.handleChange}/>
                        )
                    })}
                    <div className="text-center" style={{paddingTop: '10px'}}>
                        <Button style={{width: '100%', backgroundColor: 'rgba(126,203,244,1)', borderRadius: '8px'}}>
                            Post
                        </Button>
                    </div>
                </Form>
            </div>
        }
        return (
            <div style={{padding: '10px', height: '100%'}}>
                {form}
            </div>
        )
            
    }
}

const mapStateToProps = state => {
    return {
        author: state.profile.author,
        categories: state.post.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateNewPost: data => dispatch(actions.initNewPost(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
    mapPropsToValues: () => ({
        title: '',
        categories: '',
        thumbnail: '',
        featured: '',
        content: ''
    }),
    validationSchema: Yup.object().shape({
        title: Yup.string()
            .min(1, 'Cannot be empty!')
            .max(100, 'Must be 100 characters or less')
            .required('Required'),
        categories: Yup.string()
            // .notOneOf('default', 'Please select category')
            .required('Required'),
        content: Yup.string()
            .min(1, 'Cannot be empty!')
            .max(1000, 'Must be 1000 characters or less')
            .required('Required'),
        thumbnail: Yup.string()
            .required('Required'),
        featured: Yup.string()
            .optional()
    })
})(NewPosts));
