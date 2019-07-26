import React from 'react';
import  { connect } from 'react-redux';
import {fetchDictionary} from '../store/actions/index';
import Loader from 'react-loader-spinner';


const Dictionary = props => {
    const getDef = e => {
        e.preventDefault();
        props.fetchDictionary();
    }

    if (props.isFetching) {
        return <Loader type="Puff" color="#00BFFF" height="100" width="100" />   
    }

    return (
        <div>
            <h2>Search here</h2>
                <input></input>
            <button onClick={getDef}>Search</button>
            {props.dictionary && <p>{props.dictionary}</p>}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        error: state.error,
        isFetching: state.isFetching,
        dictionary: state.dictionary
    };
}

export default connect(mapStateToProps, {fetchDictionary})(Dictionary);