import {
    FETCH_DICTIONARY_START,
    FETCH_DICTIONARY_SUCCESS,
    FETCH_DICTIONARY_START_FAILURE
} from '../actions/index';



export const initialState = {
    error: '',
    isFetching: false,
    dictionary: null
};


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DICTIONARY_START:
            return {
                ...state,
                isFetching: true,
                dictionary: null
            }
        default:
            return state;
    }
};