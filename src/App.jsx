import React from 'react';
import {
  Link,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

//create a hook called useStyles which is equal to a function call for makeStyles and this utilises a call back fuction which returns an object which contains all the styling

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Hello everyone this is a photo album
              and I'm trying to make this sentence
              long so we can see how it looks like
              on the screen. This app was made
              using a video tutorial{' '}
              <Link href='https://www.youtube.com/watch?v=Xoz31I1FuiY'>
                Learn Material UI in One Hour -
                React Material UI Project Tutorial
                [2022]
              </Link>
            </Typography>
            <div className={classes.buttons}>
              <Grid
                container
                spacing={2}
                justify='center'
              >
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                  >
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    color='primary'
                  >
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container
          className={classes.cardGrid}
          maxWidth='md'
        >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid
                item
                key={card}
                xs={12}
                sm={6}
                md={3}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image Title'
                  />
                  <CardContent
                    className={
                      classes.cardContent
                    }
                  >
                    <Typography
                      gutterBottom
                      variant='h5'
                    >
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You
                      can use this section to desc
                      the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size='small'
                      color='primary'
                    >
                      View
                    </Button>
                    <Button
                      size='small'
                      color='primary'
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography
          variant='h6'
          align='center'
          gutterBottom
        >
          Footer
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textsecondary'
        >
          Something here to give the footer a
          purpose <br></br>
          <Link href='https://mui.com/getting-started/installation/'>
            MUI Resources{' '}
          </Link>
        </Typography>
      </footer>
    </>
  );
}

export default App;
