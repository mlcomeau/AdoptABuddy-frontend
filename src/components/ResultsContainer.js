import React from 'react';
import { connect } from 'react-redux';

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
      const classes = useStyles();
      const resultCards = searchResults.length > 0 ? searchResults.map(r => <Grid item key={r.id} xs={5}><ResultCard result={r} key={r.id} /></Grid>) : null

      return (
        <div className={classes.root}>
            <Box m={10}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>      
                            <Typography variant="h4">
                                <PetsIcon color="primary"/> Search Results <PetsIcon color="primary"/>
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