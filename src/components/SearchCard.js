import React from 'react';
import { connect } from 'react-redux';
// withRouter -> access to history object 
import { withRouter } from 'react-router-dom';
import { fetchSearchResults, resetSearchResults } from '../actions/searchResults.js';
import { deleteSearch } from '../actions/searches.js'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
    borderRadius: 20,
    borderColor: "primary.main"
  },

});

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
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="body2" component="p">
          Animal: {search.animal}
          <br />
          Gender: {search.gender}
          <br />
          Age: {search.age}
          <br />                 
          Size: {search.size}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small" onClick={goSearch}>Keep Searching...</Button>
        <Button variant="contained" color="secondary" size="small" onClick={()=>deleteThisSearch(search.id)}>Delete This Search</Button>
      </CardActions>
    </Card>
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

