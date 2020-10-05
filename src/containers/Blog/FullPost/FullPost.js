import React, { Component } from 'react';
import axios from '../../../axios';

import {Card, CardBody, CardTitle, CardText, CardSubtitle} from 'reactstrap';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    loadedData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        // console.log(response);
                        this.setState({
                            loadedPost: response.data
                        })
                    });
            }
        }
    }

    render () {
        let post = <h1>No post</h1>
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
            <div style={{paddingTop: '10px'}}>
                        <Card style={{height: '100%', backgroundColor: 'rgb(228, 237, 232)', border: '2px solid rgb(228, 237, 232)'}}>
                            <CardBody>
                                <CardSubtitle>
                                    <small>TECHNOLOGY
                                    </small>
                                </CardSubtitle>
                                <CardTitle style={{paddingTop: '5px'}}>{this.state.loadedPost.title}</CardTitle>
                                <CardSubtitle>
                                    <small>
                                        of the month
                                    </small>
                                </CardSubtitle>
                            </CardBody>
                            <img width="100%" src={this.state.loadedPost.thumbnail} alt="Card cap" />
                            <CardBody>
                                <CardText>
                                    {this.state.loadedPost.content}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>

        );
        }
        return post;
    }
}

export default FullPost;