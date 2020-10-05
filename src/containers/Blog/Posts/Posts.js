import React, { Component} from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardImgOverlay,
    Nav, NavItem, NavLink, CardText
} from 'reactstrap';

import Post1 from '../../../components/Post/Post1/Post1';
import Post2 from '../../../components/Post/Post2/Post2';
import Post4 from '../../../components/Post/Post4/Post4';
import Post5 from '../../../components/Post/Post5/Post5';
import Post6 from '../../../components/Post/Post6/Post6';
import Subscribe from '../../../components/Subscribe/Subscribe';
import Author from '../../../components/Author/Author';
import Categories from '../../../components/Categories/Categories';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts1: [],
        posts2: [],
        posts4: [],
        posts5: [],
        posts6: [],
        author: [],
        authorUsername: [],
        categories: [],
        error: false
    }

    componentDidMount () {
        console.log(this.props)
        axios.get('/posts')
            .then(response => {
                const posts1 = response.data.slice(0,1);
                const posts2 = response.data.slice(1,2);
                const posts4 = response.data.slice(2,3);
                const posts5 = response.data.slice(3,4);
                const posts6 = response.data.slice(4,5);
                // console.log(posts1);
                this.setState({posts1: posts1});
                this.setState({posts2: posts2});
                this.setState({posts4: posts4});
                this.setState({posts5: posts5});
                this.setState({posts6: posts6});
            })
            .catch(error => {
                this.setState({error: true})
            });

        axios.get('/authors')
            .then(response => {
                const author1 = response.data.slice(1,2);
                let num = + author1[0].user.split('/').splice(-2,1)[0];
                this.setState({author: author1});
                axios.get('/users/' + num)
                    .then( response => {
                        this.setState({authorUsername: response.data});
                        console.log(response.data);
                    })
                    .catch(error => error);
            })
            .catch(error => {
                this.setState({error: true});
            });
        
        // axios.get('/authors')
        //     .then(response => {
        //         const author1 = response.data.slice(1, 2);
        //         this.setState({
        //             author: author1
        //         });
        //     })
        //     .catch(error => {
        //         this.setState({
        //             error: true
        //         });
        //     });
        
        axios.get('/categories')
            .then(response => {
                this.setState({
                    categories: response.data
                });
            })
            .catch(error => {
                this.setState({
                    error: true
                });
            });
    }

    selectPostHandler = (id) => {
        this.props.history.push('/posts/' + id)
    }

    render () {
        let posts1, posts2, posts4, posts5, posts6 = <h1>Something went wrong!</h1>
        if (!this.state.error) {
            posts1 = this.state.posts1.map(post => {
                return <Post1 
                            key={post.id}
                            title={post.title}
                            thumbnail={post.thumbnail}
                            category={post.categories}
                            author={post.author}
                            date={post.created_on}
                            clicked={() => this.selectPostHandler(post.id)}/>;
            });
            posts2 = this.state.posts2.map(post => {
                return <Post2 
                            key={post.id}
                            title={post.title}
                            content={post.content}/>;
            });
            posts4 = this.state.posts4.map(post => {
                return <Post4 
                            key={post.id}
                            title={post.title}
                            thumbnail={post.thumbnail}/>;
            });
            posts5 = this.state.posts5.map(post => {
                return <Post5 
                            key={post.id}
                            title={post.title}
                            thumbnail={post.thumbnail}/>;
            });
            posts6 = this.state.posts6.map(post => {
                return <Post6 
                            key={post.id}
                            title={post.title}
                            thumbnail={post.thumbnail}
                            content={post.content}/>;
            });
        }

        let author = <h1>testing</h1>;

        if (!this.state.error) {
            author = this.state.author.map(auth => {
                return <Author 
                            profilePicture={auth.profile_picture}/>
            })
        }
        return (
            <Container fluid={true} style={{width: '95%'}}>
                <div className="Large">
                    <Row>
                        <Col xs="3">
                            <Categories cat={this.state.categories}/>
                        </Col>
                    <Col xs="9">
                    <Row>
                        <Col xs="8">
                            <div>
                                {posts1}
                            </div>
                        </Col>
                        <Col xs="4">
                            <div>
                                {posts2}
                            </div>
                        </Col>
                    </Row>
                    {/* second row */}
                    <Row style={{paddingTop: '30px'}}>
                        <Col xs="4">
                            <div>
                                <Subscribe />
                            </div>
                        </Col>
                        <Col xs="4">
                            <div>
                                {posts4}
                            </div>
                        </Col>
                        <Col xs="4">
                            <div>
                                {posts5}
                            </div>
                        </Col>
                    </Row>
                    {/* third row */}
                    <Row style={{paddingTop: '30px'}}>
                        <Col xs="10">
                            <div>
                                {posts6}
                            </div>
                        </Col>
                        <Col xs="2">
                            <div>
                                {author}
                            </div>
                        </Col>
                    </Row>
                    </Col>
                    </Row>
                </div>
                <div className="Small">
                    <div style={{paddingTop: '10px'}}>
                        <Card style={{height: '100px', backgroundColor: 'rgb(228, 237, 232)', border: '2px solid rgb(228, 237, 232)'}}>
                            <CardBody>
                                <Row>
                                    <Col xs="4">
                                        <CardImg style={{borderRadius: '10px', height: '80px'}} width="100%" src="" alt="Card image cap"/>
                                    </Col>
                                    <Col xs="8">
                                        <CardTitle style={{paddingTop: '10px'}}>testing again</CardTitle>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{paddingTop: '20px'}}>
                        <Card style={{height: '380px', width: '250px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '15px'}}>
                            <CardBody>
                                <CardTitle>Author</CardTitle>
                                <CardSubtitle>of the month</CardSubtitle>
                                <CardImg top style={{borderRadius: '10px'}} width="100%" src="" alt="Card image cap"/>
                                <CardImgOverlay>
                                    <CardTitle style={{paddingTop: '130px', paddingLeft: '20px'}}>Manuz</CardTitle>
                                </CardImgOverlay>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{paddingTop: '34px'}}>
                        <Nav pills>
                            <NavItem>
                            <NavLink href="#" active>home</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">cat</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">search</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink disabled href="#">hehe</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div style={{paddingTop: '10px'}}>
                        <Card style={{height: '100%', backgroundColor: 'rgb(228, 237, 232)', border: '2px solid rgb(228, 237, 232)'}}>
                            <CardBody>
                                <CardSubtitle>
                                    <small>TECHNOLOGY
                                    </small>
                                </CardSubtitle>
                                <CardTitle style={{paddingTop: '5px'}}>testing again</CardTitle>
                                <CardSubtitle>
                                    <small>
                                        of the month
                                    </small>
                                </CardSubtitle>
                            </CardBody>
                            <img width="100%" src="/assets/318x180.svg" alt="Card cap" />
                            <CardBody>
                                <CardText>
                                    The old API will be supported in all 16. x releases, but applications using it should migrate to the new version.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Route path={this.props.match.url + '/:id'} component={FullPost} />
            </Container>
        );
    }
}

export default Posts;