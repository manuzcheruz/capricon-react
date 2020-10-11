import React from 'react';
import { connect } from 'react-redux';

import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImgOverlay
} from 'reactstrap';

const author = (props) => {
    // console.log(props.author[0].slice(1,2));
    let author = <h1>cannot load author!</h1>
    if (!props.error) {
        author = props.author.slice(1,2).map(auth => {
            return <Card key={auth.id} onClick={() => props.clicked(auth.id)} style={{height: '222px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
        <CardBody style={{padding: '5px'}}>
            <CardTitle style={{paddingLeft: '10px'}}>Author</CardTitle>
            <CardSubtitle><small>of the month</small></CardSubtitle>
            <CardImg top style={{borderRadius: '10px', height: '130px'}} width="100%" src={auth.profile_picture} alt="Card image cap"/>
                <CardImgOverlay>
                    <CardTitle style={{paddingTop: '130px', paddingLeft: '5px'}}>Manuz</CardTitle>
                </CardImgOverlay>
            <CardSubtitle style={{paddingTop: '5px', paddingLeft: '10px'}}><small>view profile</small></CardSubtitle>
        </CardBody>
    </Card>
        })
    }
    return author;
}

const mapStateToProps = state => {
    return {
        author: state.authors
    }
}

export default connect(mapStateToProps)(author);