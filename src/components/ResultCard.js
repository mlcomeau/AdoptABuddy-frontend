import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PetsIcon from '@material-ui/icons/Pets';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';

const style = {
  height: "auto", 
  width: "auto" 
}


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
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
      backgroundColor: blue[500],
    },
  }));

const ResultCard = ({result}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="pet" className={classes.avatar}>
              <PetsIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={result.name}
        />
        <CardMedia>
        <>
          { result.primary_photo_cropped !== null ? <img src={result.primary_photo_cropped.small} style={style} alt="pet-pic"/> : <img src="https://eatnstreet.com/images/NoImageAvailable.png" style={style} alt="no-pic" /> }
        </>
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {result.age} - {result.gender} -{result.small} - {result.breeds.primary}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
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
            <Typography paragraph>
              Good with children? {result.environment.children}
              <br/>
              Good with dogs? {result.environment.dogs}
              <br/> 
              Good with cats? {result.environment.cats}
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

    



