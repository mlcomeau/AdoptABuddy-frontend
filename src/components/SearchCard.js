import React from 'react';
import { connect } from 'react-redux';
// withRouter -> access to history object 
import { withRouter } from 'react-router-dom';
import { fetchSearchResults, resetSearchResults } from '../actions/searchResults.js';
import { deleteSearch } from '../actions/searches.js'

import { Button, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1)
    },
    box: {
      border: '2px solid black',
      maxWidth: '400px'
    }
  }));


const SearchCard = ({search, fetchSearchResults, location, searchRadius, resetSearchResults, history, deleteSearch}) => {

  const classes = useStyles();

  const goSearch = () => {
    resetSearchResults()
    fetchSearchResults({...search, location, searchRadius}, history)
  }

  const deleteThisSearch = (searchId) => {
    deleteSearch(searchId)
  }

  return (
    <Grid container spacing={1} className={classes.box}>
      <Grid item xs={6}>
        <Typography>
          Animal: {search.animal} <br />
          Gender: {search.gender} <br />
          Age: {search.age} <br />
          Size: {search.size}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="primary" className={classes.button} onClick={goSearch}>Go</Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={()=>deleteThisSearch(search.id)}>Delete</Button>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
  const location = state.currentUser ? state.currentUser.zipcode : ""
  const searchRadius = state.currentUser ? state.currentUser.search_radius : "" 
  return {
    location,
    searchRadius 

  }
}

export default withRouter(connect(mapStateToProps, { fetchSearchResults, resetSearchResults, deleteSearch })(SearchCard)) 

