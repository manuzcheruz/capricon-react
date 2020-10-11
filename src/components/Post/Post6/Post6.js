import React from 'react';
import { connect } from 'react-redux';

import {
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';

const post6 = (props) => {
    let post = <h1>cannot load post!</h1>
    if (!props.error) {
        post = props.post.slice(4, 5).map(pst => {
            return <Card key={pst.id} onClick={() => props.selected(pst.id)} style={{borderColor: 'white', borderStyle: 'solid', borderWidth: '8px', backgroundColor: 'rgb(228, 237, 232)', height: '222px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px'}}>
        <CardBody>
            <Row style={{padding: '10px'}}>
                <Col xs="8">
                    <Button style={{borderRadius: '5px', height: '30px', padding: '2px 15px 2px 15px'}} className="btn-success">Featured</Button>
                    <CardTitle style={{paddingTop: '10px'}}>{pst.title}</CardTitle>
                    <CardText className="text-success">
                        <div dangerouslySetInnerHTML={{__html: pst.content.length > 90 ? `${pst.content.substring(0, 90)}...` : pst.content}}/>
                    </CardText>
                </Col>
                <Col xs="4">
                    <CardImg style={{borderRadius: '20px', height: '150px'}} width="100%" src={pst.thumbnail} alt="Card image cap"/>
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

export default connect(mapStateToProps)(post6);