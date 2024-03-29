import * as types from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.EMPLOYEE_CHANGED:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};