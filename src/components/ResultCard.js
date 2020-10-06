import React from 'react';
import '../App.css'

import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import PetsIcon from '@material-ui/icons/Pets';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: blue[900],
    },
  }));

const ResultCard = ({result}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="pet" className={classes.avatar}>
              <PetsIcon />
            </Avatar>
          }
          titleTypographyProps={{variant:'h6' }}
          title={result.name}
        />
        <CardMedia>
        <>
          { result.primary_photo_cropped ? <img src={result.primary_photo_cropped.small} className="photo" alt="pet-pic"/> : <img src="https://eatnstreet.com/images/NoImageAvailable.png" className="photo" alt="no-pic" /> }
        </>
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {result.age} - {result.gender} -{result.small} - {result.breeds.primary !== null ? result.breeds.primary : "Unknown"}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Spayed/Neutered? {result.attributes.spayed_neutered === true ? "Yes" : "No"}
              <br/>
              House-trained? {result.attributes.house_trained === true ? "Yes" : "No"}
              <br/>
              Declawed? {result.attributes.declawed === true ? "Yes" : "No"}
              <br/>
              Special Needs? {result.attributes.special_needs === true ? "Yes" : "No"}
              <br/>
              Shots Current? {result.attributes.spayed_neutered === true ? "Yes" : "No"}
            </Typography>
            <CardActions>
              <Link href={result.url} target="_blank" rel="noopener">Learn more about {result.name}</Link>
            </CardActions>
          </CardContent>
        </Collapse>
      </Card>
    );
}

export default ResultCard 

    



