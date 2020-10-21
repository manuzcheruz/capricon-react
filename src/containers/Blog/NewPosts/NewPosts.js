import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../../../axios';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Editor } from '@tinymce/tinymce-react';
import { Formik,} from 'formik';

import Spinner from '../../../components/UI/Spinner/Spinner';

class NewPosts extends Component {
    state = {
        loading: false,
        formIsValid: false
    }

    postHandler = event => {
        event.preventDefault()
        console.log('hapa');
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
        let form = <div>
            <h5 className="text-light text-center">Create a new article {this.props.users.filter(item => item.id === this.props.authorId).map(item => <span className="text-capitalize">{item.username}</span>)}</h5>
        <Form onSubmit={this.postHandler}>
                    <FormGroup>
                        <Label className="text-light">
                            Title
                        </Label>
                        <Input type="text" required name="title" placeholder="Enter article title" onChange={(event) => this.inputChangeHandler(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-light">
                            Content
                        </Label>
                        <Editor apiKey = "doh7uvi94w8ejme39aoeql00wr4wtwf5303k0o30lw2751ez"
                            initialValue = "<p>Enter content here</p>"
                            plugins = 'wordcount' />
                    </FormGroup>
                    <FormGroup className="text-light">
                        <Label>
                            Thumbnail
                        </Label>
                        <Input type="file" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-light">
                            Category
                        </Label>
                        <Input type="select" name="category">
                            {this.props.categories.map(item => <option value={item.id}>{item.title}</option>)}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-light">
                            Status
                        </Label>
                        <Input type="select" name="status">
                            <option>Publish</option>
                            <option>Draft</option>
                        </Input>
                    </FormGroup>
                    <FormGroup check>
                        <Label className="text-light" check>
                            <Input type="checkbox"/>
                            Feature article?
                        </Label>
                    </FormGroup>
                    <div className="text-center" style={{paddingTop: '10px'}}>
                        <Button style={{width: '200px', backgroundColor: 'rgba(126,203,244,1)'}}>
                            Submit article
                        </Button>
                    </div>
                </Form>
        </div>
        if (this.state.loading) {
            form = <div className="text-center">
                    <Spinner />
                </div>
        }
        return (
            <div style={{padding: '10px'}}>
                {form}
            </div>
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
