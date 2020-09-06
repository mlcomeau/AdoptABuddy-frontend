import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';

import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const Login = ({ loginForm, updateLoginForm, login }) => {

  const classes = useStyles();
    
  const handleInputChange = event => {
        const { name, value } = event.target
        const updatedForm = {
            ...loginForm,
            [name]: value 
        }
        updateLoginForm(updatedForm)
  }

  const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper} onSubmit={handleSubmit}>
          <Avatar className={classes.avatar}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to AdoptABuddy
          </Typography>
          <Typography variant="subtitle2">
            Please sign in.
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              value={loginForm.username}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={loginForm.password}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
  );
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }    
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)