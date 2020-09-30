import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const post2 = (props) => (
    <Card style={{height: '222px', boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
        <CardBody>
            <CardBody style={{height: '100px' ,backgroundColor: 'rgb(228, 237, 232)', borderRadius: '15px'}}>testing</CardBody>
            <CardTitle style={{paddingTop: '10px'}}>{props.title}</CardTitle>
         </CardBody>
    </Card>
);

export default post2;