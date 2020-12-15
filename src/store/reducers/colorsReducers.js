
import {GET_COLORS, ADD_COLOR, DELETE_COLOR} from '../types'

const initialState = {
    colors:[],
    listColors:[{
        "text": 'My first default text',
        "hex": "61a1e1",
      }],
    loading:true
}

export default function reduc(state = initialState, action) {

    switch(action.type){

        case GET_COLORS:
        return {
            ...state,
            colors: action.payload,
            loading: false

        };
        case ADD_COLOR:
            return {
                ...state,
                listColors: [...state.listColors, action.payload],
    
        };
        case DELETE_COLOR:
            return {
                ...state,
                listColors: state.listColors.filter((color, index) => index !== action.payload)
              }
        default: 
            return state
    }
}
