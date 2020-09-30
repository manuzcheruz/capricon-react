import React from 'react';
import {
    Card,
    ListGroup
} from 'reactstrap';
import Category from './Category/Category';


const categories = (props) => {
    const cat = props.cat.map(category => {
        return <Category 
                    key={category.id}
                    title={category.title}/>
    });
    return (
        <Card className="border border-white" style={{height: '700px'}}>
        <ListGroup style={{paddingTop: '100px'}}>
            {cat}      
        </ListGroup>
    </Card>
    );
};

export default categories;