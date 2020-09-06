return (
<Card className={classes.root} variant="outlined">
<CardContent>
<Typography variant="body2" component="p">
{search.animal}
<br /> -
<br />
{search.gender}
<br /> -
<br />
{search.age}
<br /> -
<br />  
 {search.size}
</Typography>
</CardContent>
<CardActions>
<Button size="small">Keep Searching...</Button>
</CardActions>
</Card>
);

---

return (
<div className={classes.root}>
<Grid container spacing={5}>
<Grid item xs={12}>
<Paper className={classes.paper}>My Previous Searches</Paper>
</Grid>
{searchCards}
</Grid>
</div>
);

---

<FormControl className={classes.formControl}>
</FormControl>

          <input type="text" value={searchForm.animal} placeholder="Animal Type" onChange={handleInputChange} name="animal"></input><br/>
          <Select 
            formatGroupLabel={formatGroupLabel}
            options={animalOptions}
            value={searchForm.animal}
            onChange={value => handleInputChange(value)}
            name="animal"
            placeholder="Select animal..."
          /><br/>

<CardMedia
          className={classes.media}
          image={result.primary_photo_cropped !== null ? result.primary_photo_cropped.small : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"}
          title={result.name}
        />

        <input type="text" value={searchForm.animal} placeholder="Animal Type" onChange={handleInputChange} name="animal"></input>

-index.css-
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}