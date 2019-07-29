export const FETCH_DICTIONARY_START = 'FETCH_DICTIONARY_START';
export const FETCH_DICTIONARY_SUCCESS = 'FETCH_DICTIONARY_SUCCESS';
export const FETCH_DICTIONARY_FAILURE = 'FETCH_DICTIONARY_FAILURE';

export const fetchDictionary = () => dispatch => {
    dispatch({ type: FETCH_DICTIONARY_START});
    //fetch dictionary
}