import React from 'react';
import { connect } from 'react-redux';

const Results = ({ results }) => {
    return (
        <div></div>
    )
}

const mapStateToProps = state => {
    return {
        results: state.results 
    }
}

export default connect(mapStateToProps)(Results)