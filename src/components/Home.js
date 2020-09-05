import React from 'react';
import { connect } from 'react-redux';
import SearchesContainer from './SearchesContainer.js';
import ResultsContainer from './ResultsContainer.js';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    box: {
        textAlign: 'center',
    },
    title: {
        flexGrow: 1,
    }
  }));

const Home = ({ resultsCount }) => {

    const classes = useStyles();

    return (
        <div>
            { resultsCount > 0 ? <ResultsContainer /> : null }
            <SearchesContainer /> 
            <Box className={classes.box} fontSize="h6.fontSize">
                <Link href='/search'>Start New Search</Link>   
            </Box>         
        </div>
    )

}

const mapStateToProps = state => {
    return {
        resultsCount: state.searchResults.length
    }
}

export default connect (mapStateToProps)(Home)