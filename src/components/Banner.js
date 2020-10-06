import React from 'react';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab href='/search' variant="extended" color="primary" >
                <SearchIcon className={classes.extendedIcon}/>
                Start New Search
            </Fab>
        </div>
    )
}

export default Banner