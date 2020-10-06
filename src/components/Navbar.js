import React from 'react';
import Logout from './Logout.js';

import { AppBar, Typography, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
  }));


const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">AdoptABuddy - Find Adoptable Animals Now!</Typography>
                    <Logout />      
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar