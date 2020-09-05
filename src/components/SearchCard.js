import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../actions/searchResults.js';
import { resetSearchResults } from '../actions/searchResults.js';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
    borderRadius: 20,
    borderColor: "primary.main"
  },

});



const SearchCard = ({search, fetchSearchResults, location, searchRadius, resetSearchResults, history}) => {
    const classes = useStyles();

    const goSearch = () => {
      resetSearchResults()
      fetchSearchResults({...search, location, searchRadius}, history)
    }

    return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="body2" component="p">
          Animal: {search.animal}
          <br />
          <br />
          Gender: {search.gender}
          <br />
          <br />
          Age: {search.age}
          <br />
          <br />                    
          Size: {search.size}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small" onClick={goSearch}>Keep Searching...</Button>
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

export default withRouter(connect(mapStateToProps, { fetchSearchResults, resetSearchResults })(SearchCard)) 

