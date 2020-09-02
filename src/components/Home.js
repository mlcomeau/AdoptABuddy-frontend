import React from 'react';
import Logout from './Logout.js';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const Home = () => {

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">AdoptABuddy</Typography>
                
                </Toolbar>
            </AppBar>
            <p>This is where the user goes when they are logged in </p>
            <Logout />
        </div>
    )

}

export default Home 