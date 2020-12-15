import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteColor } from '../store/actions/colorsAction'
import { Button, ListGroup } from 'react-bootstrap';

 class listColor extends Component {

    render() {
        const listColors = this.props.colors.listColors

        return (
            <>
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
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteColor: (color) => dispatch(deleteColor(color))
    }
  }

const mapStateToProps  = (state) => ({colors:state.colors})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(listColor);
 
