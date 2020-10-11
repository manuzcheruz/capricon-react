import React from 'react';
import { connect } from 'react-redux';

import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const post2 = (props) => {
    let post = <h1> cannot load post! </h1>
    if (!props.error) {
        post = props.post.slice(1, 2).map(pst => {
            return <Card key={pst.id} onClick={() => props.selectPostHandler(pst.id)} style={{height: '222px', boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
        <CardBody>
            <CardBody style={{height: '100px' ,backgroundColor: 'rgb(228, 237, 232)', borderRadius: '15px'}}>testing</CardBody>
            <CardTitle style={{paddingTop: '10px'}}>{pst.title}</CardTitle>
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

export default connect(mapStateToProps)(post2);