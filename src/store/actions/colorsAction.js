import {GET_COLORS, COLORS_ERROR, ADD_COLOR, DELETE_COLOR} from '../types'
import axios from 'axios'

export const getColors = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://www.colr.org/json/colors/random/10`)
        
        dispatch( {
            type: GET_COLORS,
            payload: res.data.colors
        })
    }
    catch(e){
        dispatch( {
            type: COLORS_ERROR,
            payload: console.log(e),
        })
    }

}

export const addColor = color => ({
    type: ADD_COLOR,
    payload: color

}); 

export const deleteColor = index => ({
    type: DELETE_COLOR,
    payload: index
}); 



