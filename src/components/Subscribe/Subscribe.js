import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

const subscribe = (props) => (
    <Card style={{height: '150px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
        <CardBody>
            <CardTitle>Subscribe to Newsletter</CardTitle>
            <InputGroup style={{paddingTop: '10px'}}>
                <Input placeholder="Enter Email" />
                <InputGroupAddon addonType="append">
                    <InputGroupText>@example.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </CardBody>
    </Card>
);

export default subscribe;