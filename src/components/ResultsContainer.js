import React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResultCard from './ResultCard.js';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const ResultsContainer = ({searchResults}) => {
    const { pathname } = useLocation();
    const classes = useStyles();
    const [state, setState] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    const resultCards = searchResults.length > 0 ? searchResults.map(r => <Grid item xs={5}><ResultCard result={r}/></Grid>) : null

    const sortResults = event => {
        if (event.target.value === "name") {
            const sortedResults = searchResults.sort(function(a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                return -1;
                }
                if (nameA > nameB) {
                return 1;
                }
            
                // names must be equal
                return 0;
            });
            setState( {sortedResults} )
        }
        if (event.target.value === "breed") {
            const sortedResults = searchResults.sort(function(a, b) {
                var nameA = a.breeds.primary.toUpperCase(); // ignore upper and lowercase
                var nameB = b.breeds.primary.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
              });
            setState({sortedResults})
        }
        
    }

    return (
        <div className={classes.root}>
            <Box m={10} mt={1}>

                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>      
                            <Typography variant="h4">
                                <PetsIcon color="primary"/> Search Results <PetsIcon color="primary"/>
                                <select className="sort" onChange={sortResults}>
                                    <option diabled> Sort Results </option>
                                    <option value="name">Sort by Name</option>
                                    <option value="breed">Sort by Breed</option>
                                </select><br/>
                            </Typography>   
                        </Paper>
                    </Grid>
                    {resultCards}  
                </Grid>
            </Box>
        </div>          
    )
}

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults
    }
}

export default connect (mapStateToProps)(ResultsContainer)
