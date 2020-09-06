import React from 'react';
import { connect } from 'react-redux';
import { Typography, Link } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const Banner = ({userName, searchesCount}) => {
    return (
        <div className="banner">
            <Typography variant="h6"><EmojiEmotionsIcon color="action"/> Welcome back {userName}!</Typography>
            <Typography variant="overline" display="block" gutterBottom>You have {searchesCount} saved searches!</Typography>
            <Link href='/search'>Start New Search</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userName: state.currentUser.name, 
        searchesCount: state.searches.length
    }
}

export default connect(mapStateToProps)(Banner)