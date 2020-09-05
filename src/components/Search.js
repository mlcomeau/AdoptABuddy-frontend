import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm, createSearch } from '../actions/searchForm.js';
import { fetchSearchResults } from '../actions/searchResults.js';
import '../App.css'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Search = ({ searchForm, updateSearchForm, userId, history, createSearch, location, searchRadius, fetchSearchResults }) => {
    const classes = useStyles();

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedForm = {
            ...searchForm,
            [name]: value 
        }
        updateSearchForm(updatedForm)
    }

    const handleSubmit = event => {

        event.preventDefault()

        createSearch({...searchForm, userId}, history)

        fetchSearchResults({...searchForm, location, searchRadius}, history)      
    }

    return (
        <div>
        <div className="top">
            <Typography variant="h6"><a href="/"><ArrowBackIcon fontSize="small"/>Back to Home</a></Typography>
        </div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <PetsIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Start Searching Now!
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography variant="subtitle1"><label for="animal">Please Select an Animal: </label></Typography>
                <select className="select" onChange={handleInputChange} value={searchForm.animal} name="animal" required>
                  <option value="" disabled> - </option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="subtitle1"><label for="gender">Please Select a Gender: </label></Typography>
                <select className="select" onChange={handleInputChange} value={searchForm.gender} name="gender" required>
                  <option value="" disabled> - </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="any">Any</option>
                </select>                  
                </Grid>
                <Grid item xs={12}>
                <Typography variant="subtitle1"><label for="age">Please Select an Age: </label></Typography>
                <select className="select" onChange={handleInputChange} value={searchForm.age} name="age" required>
                  <option value="" disabled> - </option>
                  <option value="baby">Baby</option>
                  <option value="young">Young</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                  <option value="any">Any</option>
                </select>    
                </Grid>
                <Grid item xs={12}>
                <Typography variant="subtitle1"><label for="size">Please Select a Size: </label></Typography>
                <select className="select" onChange={handleInputChange} value={searchForm.size} name="size" required>
                  <option value="" disabled> - </option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="xlarge">X-Large</option>
                  <option value="any">Any</option>
                </select>   
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Start Search
              </Button>
            </form>
          </div>
        </Container>
        </div>
      );



}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    const location = state.currentUser ? state.currentUser.zipcode : ""
    const searchRadius = state.currentUser ? state.currentUser.search_radius : ""
    return {
        searchForm: state.searchForm,
        userId,
        location,
        searchRadius
    }
}

export default connect (mapStateToProps, { updateSearchForm, createSearch, fetchSearchResults })(Search)