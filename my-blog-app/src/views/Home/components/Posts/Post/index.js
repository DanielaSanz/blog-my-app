import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      maxWidth: 900,
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: 435,
    },
    [theme.breakpoints.down("xl")]: {
      maxWidth: "100%",
    },
    maxWidth: 345,
  },
  media: {
    [theme.breakpoints.down("md")]: {
      height: 240,
    },
    [theme.breakpoints.down("xl")]: {
      height: 240,
    },
    height: 140,
  },
}));

function Post() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {/* Cuando haga clic en algun lado (el que quieran) hacer algo */}
          Share
        </Button>
        <Button size="small" color="primary" >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;