import React from 'react';
import SearchesContainer from './SearchesContainer.js';
import Search from './Search.js';

import Grid from '@material-ui/core/Grid';

const Home = () => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}><Search /></Grid>
            <Grid item xs={6}><SearchesContainer /></Grid>
        </Grid>
    )
}


export default Home