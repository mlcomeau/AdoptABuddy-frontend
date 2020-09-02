            <label for="searchRadius">Please select a search radius (miles):</label><br/>
            <select name="searchRadius">
                <option value={signupForm.searchRadius} onChange={handleInputChange}>10</option>
                <option value={signupForm.searchRadius} onChange={handleInputChange}>25</option>
                <option value={signupForm.searchRadius} onChange={handleInputChange}>50</option>
                <option value={signupForm.searchRadius} onChange={handleInputChange}>100</option>
            </select><br/>

-- can i make a form with drop down menu that sends selection to params 

---------------------------------------------------------------
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={signupForm.name}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={signupForm.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="zipcode"
                label="Zip Code"
                name="zipcode"
                autoComplete="zipcode"
                value={signupForm.zipcode}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="search_radius"
                label="Search Radius"
                name="search_radius"
                autoComplete="zipcode"
                value={signupForm.search_radius}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={signupForm.password}
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}




    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" value={signupForm.name} name="name" type="text" onChange={handleInputChange} /><br/>
            <input placeholder="Email" value={signupForm.email} name="email" type="email" onChange={handleInputChange} /><br/>
            <input placeholder="Password" value={signupForm.password} name="password" type="password" onChange={handleInputChange} /><br/>
            <input placeholder="Zip Code" value={signupForm.zipcode} name="zipcode" type="text" onChange={handleInputChange} /><br/>
            <input placeholder="Search Radius" value={signupForm.search_radius} name="search_radius" type="number" max="100" onChange={handleInputChange} /><br/>
            <input type="submit" value="Signup" />
        </form>