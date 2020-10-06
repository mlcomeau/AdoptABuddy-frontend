import React from 'react';
import { connect } from 'react-redux';
import SearchCard from './SearchCard';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
    }
  }));

const SearchesContainer = ({userSearches}) => {

    const classes = useStyles();

    const searchCards = userSearches.length > 0 ? userSearches.map(s => <SearchCard search={s} key={s.id}/>) : null 

    return (
        <div className={classes.paper}>
        <Typography variant="h4">Previous Searches</Typography>
        {searchCards}  
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userSearches: state.searches 
    }
}

export default connect (mapStateToProps)(SearchesContainer)