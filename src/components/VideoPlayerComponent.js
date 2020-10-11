import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
});

function VideoPlayerComponent({ url }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <ReactPlayer url={url} />
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            DJ Karmeo is in the house!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Find the best music only at DJ Karmeo!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default VideoPlayerComponent;
