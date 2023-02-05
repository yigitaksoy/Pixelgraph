import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    maxWidth: 445,
    marginTop: "2rem",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  downloadButton: {
    alignSelf: "center",
    marginTop: ".7rem",
    backgroundColor: "black",
    color: "#f8f9fa",
    "&:hover": {
      backgroundColor: "#f8f9fa",
      color: "black",
    },
  },
});

function ImageCard({ image }) {
  const classes = useStyles();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image.webformatURL;
    link.setAttribute("download", `${image.id}.jpg`);
    link.click();
  };

  return (
    <div>
      <Card exit="exit" className={classes.card} elevation={5}>
        <CardMedia
          component="img"
          alt=""
          height="365"
          image={image.webformatURL}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" align="center" component="p">
            <strong>Photo by: </strong>
            {image.user}
          </Typography>
          <Typography variant="body2" align="center" component="p">
            <strong># </strong>
            {image.tags}
          </Typography>
          <Button
            variant="contained"
            className={classes.downloadButton}
            onClick={handleDownload}
          >
            Download
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ImageCard;
