export default function SignUp() {
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Start Searching for Adoptable Animals!
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <label for="animal">Please Select an Animal: </label>
              <select onChange={handleInputChange} value={searchForm.animal} name="animal" required>
                <option value="" disabled> - </option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
              </Grid>
              <Grid item xs={12}>
              <label for="gender">Please Select a Gender: </label>
              <select onChange={handleInputChange} value={searchForm.gender} name="gender" required>
                <option value="" disabled> - </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="any">Any</option>
              </select>                  
              </Grid>
              <Grid item xs={12}>
              <label for="age">Please Select an Age: </label>
              <select onChange={handleInputChange} value={searchForm.age} name="age" required>
                <option value="" disabled> - </option>
                <option value="baby">Baby</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
                <option value="any">Any</option>
              </select>    
              </Grid>
              <Grid item xs={12}>
              <label for="size">Please Select a Size: </label>
              <select onChange={handleInputChange} value={searchForm.size} name="size" required>
                <option value="" disabled> - </option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xlarge">X-Large</option>
                <option value="any">Any</option>
              </select>  
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Start Search
            </Button>
          </form>
          <Grid container justify="flex-end">
            <Grid item>
                <Link href="/" variant="body2">
                    Go back home
                </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }


  return (
    <form onSubmit={handleSubmit}>
      <label for="animal">Please Select an Animal: </label>
      <select onChange={handleInputChange} value={searchForm.animal} name="animal" required>
          <option value="" disabled> - </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
      </select>
      <br/>
      <label for="gender">Please Select a Gender: </label>
      <select onChange={handleInputChange} value={searchForm.gender} name="gender" required>
          <option value="" disabled> - </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="any">Any</option>
      </select>        
      <br/>
      <label for="age">Please Select an Age: </label>
      <select onChange={handleInputChange} value={searchForm.age} name="age" required>
          <option value="" disabled> - </option>
          <option value="baby">Baby</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
          <option value="any">Any</option>
      </select>          
      <br/>
      <label for="size">Please Select a Size: </label>
      <select onChange={handleInputChange} value={searchForm.size} name="size" required>
          <option value="" disabled> - </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="xlarge">X-Large</option>
          <option value="any">Any</option>
      </select>  
      <br/>
      <input type="submit" value="Start Search"></input>
    </form>
      
  )