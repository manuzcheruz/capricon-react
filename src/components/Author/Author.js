import React from 'react';

import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImgOverlay
} from 'reactstrap';

const author = (props) => (
    <Card style={{height: '222px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
        <CardBody>
            <CardTitle>Author</CardTitle>
            <CardSubtitle>of the month</CardSubtitle>
            <CardImg top style={{borderRadius: '10px'}} width="100%" src={props.profilePicture} alt="Card image cap"/>
                <CardImgOverlay>
                    <CardTitle style={{paddingTop: '130px', paddingLeft: '20px'}}>Manuz</CardTitle>
                </CardImgOverlay>
        </CardBody>
    </Card>
);

export default author;