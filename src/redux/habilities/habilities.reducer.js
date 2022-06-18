import {CV } from '../../cv/cv';
import * as actions from './habilities.actions';

const { habilities } = CV;

const INITIAL_STATE = {
    habilities: habilities,
}


const habilitiesReducer = (state = INITIAL_STATE, action) => {
    const {habilities} = state;
        switch (action.type) {
            case actions.ADD_HABILITIES:
                return {...state, habilities: [...habilities, action.payload]};
            case actions.DELETE_HABILITIES:
                const habilitiesFiltered = habilities.filter(hab => hab !== action.payload);
                return {...state, habilities: [...habilitiesFiltered]};
            case actions.EDIT_HABILITIES:
                const {id, editHabilities} = action.payload;
                    habilities[id] = editHabilities;
                return state;
            default:
                return state;
    }
}

export default habilitiesReducer;