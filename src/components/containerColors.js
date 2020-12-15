import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getColors } from '../store/actions/colorsAction'
import ListColor from './listColor';
import FormColor from './formColor';

 class colors extends Component {
          
    componentDidMount(){
        this.props.getColors()   
    }

    render() {
        return (
            <div>
                <FormColor></FormColor>
                <hr/>
                <ListColor></ListColor>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getColors: (color) => dispatch(getColors(color)),
    }
  }

const mapStateToProps  = (state) => ({colors:state.colors})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(colors);
 
