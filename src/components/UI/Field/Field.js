import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { 
    FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';

const Field = (props) => {
    console.log(props.authors);
    const userId = +localStorage.getItem('userId')
    let formField = ''
    if (props.elementName === 'input') {
        formField = <FormGroup>
            <Label className="text-light">
                {props.label}
            </Label>
            <Input 
                type={props.elementType} 
                required
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange} />
            {(props.touched && props.errors[props.name]) && <small className="text-danger">{props.errors[props.name]}</small>}
            
        </FormGroup>
    } else if (props.elementName === 'select' && props.label === 'Category') {
        formField = <FormGroup>
        <Label className="text-light">
            {props.label}
        </Label>
        <Input type="select" name="select" id="exampleSelect">
            <option value="default">Select Category</option>
            {props.categories.map((cat, i) => {
                return <option key={i} value={cat.id}>{cat.title}</option>
            })}
        </Input>
      </FormGroup>
    } else if (props.elementName === 'checkbox') {
        formField = <FormGroup check>
        <Label className="text-light" check>
          <Input type="checkbox" className="text-light" />{' '}
          {props.placeholder}
        </Label>
      </FormGroup>
    } else if (props.elementName === 'textarea' && props.update === 'yes'){
        formField = <FormGroup>
            <Label className="text-light">
                {props.label}
            </Label>
            {props.authors.filter(item => item.id === userId).map((author, i) => {
                return <Input
                type={props.elementType} 
                value={author.description}
                rows='8'
                required
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange} />
            })}
            {(props.touched && props.errors[props.name]) && <small className="text-danger">{props.errors[props.name]}</small>}
            
        </FormGroup>
    } else if (props.elementName === 'textarea') {
        formField = <FormGroup>
            <Label className="text-light">
                {props.label}
            </Label>
            <Input
                type={props.elementType} 
                rows='8'
                required
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange} />
            {(props.touched && props.errors[props.name]) && <small className="text-danger">{props.errors[props.name]}</small>}
            
        </FormGroup>
    } else {
        formField = <FormGroup>
            <Label className="text-light">
                {props.label}
            </Label>
            <Editor
                type={props.elementType} 
                required
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange} />
            {(props.touched && props.errors[props.name]) && <small className="text-danger">{props.errors[props.name]}</small>}
            
        </FormGroup>
    }
    return formField;
};

const mapStateToProps = state => {
    return {
        categories: state.post.categories
    }
}

export default connect(mapStateToProps)(Field);