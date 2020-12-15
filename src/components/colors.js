import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addColor, getColors, deleteColor } from '../store/actions/colorsAction'
import { Form, Button, ListGroup, Alert } from 'react-bootstrap';

 class colors extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            text: '',
            hex:'',
            nameError: '',
            hasError: false
        };
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.addColor = this.addColor.bind(this);
    }
    
    handleChangeColor(event) {
        this.setState({hex: event.target.value});
    }

    handleChangeText(e) {
        this.setState({text: e.target.value});
    }

    addColor() {
        let listColors = 
        {
            "text": this.state.text,
            "hex": this.state.hex,
        }

        this.props.addColor(listColors);
    }

    validate = e => {
        e.preventDefault();

        let nameError = '';

        if (!this.state.text) {
            nameError = 'Please enter a name';
        }
        else {
            this.addColor();
        }
        
        if (nameError) {
            this.setState({ nameError });
            this.setState({ hasError: true })
            return false;
        }
        this.setState({ hasError: false })
    };
          
    componentDidMount(){
        this.props.getColors()   
    }

    render() {
        const {colors} = this.props.colors
        const listColors = this.props.colors.listColors

        return (
            <div>
                <Form onSubmit={this.validate}>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                        <Form.Control type="text" 
                                    placeholder="Placeholder"
                                    onChange={this.handleChangeText} 
                                    value={this.props.value}
                                    size="50" />
                        {this.state.hasError ? <Alert className="mt-2" variant="danger">{this.state.nameError}</Alert> : ''}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Color</Form.Label>
                        <Form.Control as="select" onChange={this.handleChangeColor} value={this.props.color}>
                        {colors.map((color, index) => 
                            <option value={color.hex} key={index} style={{ backgroundColor: '#' + color.hex }}>{color.hex ? '#' + color.hex : 'No color'}</option>
                        )}
                        </Form.Control>
                        <Button 
                                className="mt-3"
                                value={this.props.color}
                                type="submit"
                                variant="primary">Add item
                        </Button>
                    </Form.Group>
                </Form> 
                <hr/>
                <ListGroup>
                    {listColors.map((item, index) => 
                        <ListGroup.Item className="float-left" style={{ backgroundColor: '#' + item.hex }} key={index}>{item.text}
                            <Button 
                                size="sm" 
                                className="float-right" 
                                key={item.name} 
                                onClick={() => this.props.deleteColor(index)}
                                variant="light">Delete
                            </Button>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addColor: (value, color) => dispatch(addColor(value, color)),
        getColors: (color) => dispatch(getColors(color)),
        deleteColor: (color) => dispatch(deleteColor(color))
    }
  }

const mapStateToProps  = (state) => ({colors:state.colors})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(colors);
 
