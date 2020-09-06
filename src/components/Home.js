import React from 'react';
import { connect } from 'react-redux';
import SearchesContainer from './SearchesContainer.js';
import ResultsContainer from './ResultsContainer.js';
import Banner from './Banner.js';

const Home = ({ resultsCount }) => {

    return (
        <>
            <Banner />
            { resultsCount > 0 ? <ResultsContainer /> : null }
            <SearchesContainer />        
        </>
    )
}

const mapStateToProps = state => {
    return {
        resultsCount: state.searchResults.length
    }
}

export default connect (mapStateToProps)(Home)