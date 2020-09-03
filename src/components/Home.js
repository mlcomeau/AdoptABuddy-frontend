import React from 'react';
import Logout from './Logout.js';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const Home = () => {

    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6">AdoptABuddy</Typography>
                    <Link href='/search' variant="button">Start New Search</Link>
                    <Logout />
                </Toolbar>
            </AppBar>     
        </div>
    )

}

export default Home 