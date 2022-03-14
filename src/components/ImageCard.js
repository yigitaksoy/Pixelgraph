import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 445,
    marginTop: "2rem",
  },
});

function ImageCard({ image }) {
  const classes = useStyles();

  return (
    <div>
      <Card exit="exit" className={classes.card} elevation={5}>
        <CardMedia
          component="img"
          alt=""
          height="365"
          image={image.webformatURL}
        />
        <CardContent>
          <Typography variant="body2" align="center" component="p">
            <strong>Photo by: </strong>
            {image.user}
          </Typography>
          <Typography variant="body2" align="center" component="p">
            <strong># </strong>
            {image.tags}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ImageCard;
