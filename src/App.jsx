import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from "@material-ui/core"; 
import { PhotoCamera } from '@material-ui/icons';
import useStyles from "./styles";

//create a hook called useStyles which is equal to a function call for makeStyles and this utilises a call back fuction which returns an object which contains all the styling



function App()  {
    const classes = useStyles();
    return(
    <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon}/>
                <Typography variant="h6">
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm" >
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Hello everyone this is a photo album and I'm trying to make this sentence long so we can see how it looks like on the screen.
                    </Typography>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my Photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" 
                            title="Image Title"/>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    Heading
                                </Typography>
                                <Typography>
                                    This is a media card. You can use this section to desc the content
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main>
    </>
    );
};

export default App;