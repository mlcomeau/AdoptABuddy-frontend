import React from 'react';
import { connect } from 'react-redux';
import SearchCard from './SearchCard'

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box, Typography} from '@material-ui/core';
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

const SearchesContainer = ({userSearches}) => {

    const classes = useStyles();
    const searchCards = userSearches.length > 0 ? userSearches.map(s => <Grid item key={s.id} xs={4}><SearchCard search={s} key={s.id}/></Grid>) : null 

    return (
        <div className={classes.root}>
            <Box m={10}>
                <Grid container spacing={4} justify="center">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>      
                            <Typography variant="h4">
                                <PetsIcon color="primary"/> My Previous Searches <PetsIcon color="primary"/>
                            </Typography>   
                        </Paper>
                    </Grid>
                    {searchCards}  
                </Grid>
            </Box>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userSearches: state.searches 
    }
}

export default connect (mapStateToProps)(SearchesContainer)