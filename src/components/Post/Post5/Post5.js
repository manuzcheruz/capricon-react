import React from 'react';
import { connect } from 'react-redux';

import {
    Row,
    Col,
    Card,
    CardImg,
    CardSubtitle,
    CardBody,
    CardTitle,
} from 'reactstrap';

const post5 = (props) => {
    let post = <h1>cannot load post!</h1>
    if (!props.error) {
        post = props.post.slice(3, 4).map(pst => {
            return <Card key={pst.id} onClick={() => props.selected(pst.id)} style={{height: '150px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
        <CardBody>
            <Row>
                <Col xs="5">
                    <CardImg top width="100%" src={pst.thumbnail} alt="Card image cap" />
                </Col>
                <Col xs="7">
                    <CardSubtitle><small>views</small></CardSubtitle>
                    <CardTitle>{pst.title}</CardTitle>
                </Col>
            </Row>
        </CardBody>
    </Card>
        })
    }
    return post;
}

const mapStateToProps = state => {
    return {
        post: state.posts
    }
}

export default connect(mapStateToProps)(post5);