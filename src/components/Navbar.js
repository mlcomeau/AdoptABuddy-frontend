import React from 'react';
import Logout from './Logout.js';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
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