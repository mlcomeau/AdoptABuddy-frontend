import React from 'react';
import Logout from './Logout.js';

import { AppBar, Typography, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    box: {
        textAlign: 'center',
    },
    title: {
        flexGrow: 1,
    }
  }));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">AdoptABuddy</Typography>
                    <Logout />      
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar