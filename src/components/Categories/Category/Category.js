import React from 'react';

import {
ListGroupItem
} from 'reactstrap';

const category = (props) => (
    <ListGroupItem onClick={props.clicked} className="border border-white text-center" style={{paddingBottom: '40px'}}>{props.title}</ListGroupItem>
);

export default category;