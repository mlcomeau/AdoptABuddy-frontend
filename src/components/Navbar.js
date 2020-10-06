import React from 'react';
import Logout from './Logout.js';
import { useLocation } from "react-router-dom";


import { AppBar, Typography, Toolbar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
      flexGrow: 1,
    },
  }));


const Navbar = () => {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">AdoptABuddy - Find Adoptable Animals Now!</Typography>
                    { pathname === "/results" ? <Link href="/"><button className="back-button">Go Back</button></Link> : null}
                    <Logout />      
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar