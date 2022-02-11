import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "../index.css";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    paddingBottom: "4rem",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "#212529" }}
        elevation={20}
      >
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <a id="title" href="/">
              PixelGraph
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Title;
