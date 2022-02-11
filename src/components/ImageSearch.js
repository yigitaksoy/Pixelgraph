import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  input: {
    textAlign: "center",
    padding: "1rem",
    top: "5rem",
  },
});

const ImageSearch = ({ searchText }) => {
  const classes = useStyles();
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className={classes.input}>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <div>
          <TextField
            onChange={(e) => setText(e.target.value)}
            id="standard"
            variant="standard"
            label="Search for images"
            InputProps={{
              endAdornment: (
                <IconButton type="submit">
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
