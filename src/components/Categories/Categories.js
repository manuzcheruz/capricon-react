import React from 'react';
import { connect } from 'react-redux';

import {
    Card,
    ListGroup
} from 'reactstrap';
import Category from './Category/Category';


const categories = (props) => {
    // console.log(props.cat);
    const cat = props.cat.map(category => {
        return <Category 
                    key={category.id}
                    title={category.title}
                    clicked={() => props.onSelectCat(category.id)}/>
    });
    return (
        <Card className="border border-white" style={{height: '700px'}}>
        <ListGroup style={{paddingTop: '100px'}}>
            {cat}      
        </ListGroup>
    </Card>
    );
};

const mapStateToProps = state => {
    return {
        cat: state.post.categories
    }
}

export default connect(mapStateToProps)(categories);