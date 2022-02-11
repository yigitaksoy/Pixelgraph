import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";

import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Scroll from "./components/Scroll";

import "./index.css";

const theme = createTheme({
  palette: {
    background: {
      default: "#f8f9fa",
    },
  },
  typography: {
    fontFamily: "Paralucent",
    h5: {
      fontFamily: "parisplus-sombre",
      fontStyle: "italic",
    },
    h6: {
      fontFamily: "parisplus-sombre",
      fontWeight: "700",
    },
  },
});

const useStyles = makeStyles({
  container: {
    marginBottom: "2rem",
    width: "100%",
  },
  typo: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: "5rem",
  },
});

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const classes = useStyles();

  const perPage = 9;

  useEffect(() => {
    setHasMore(true);
    setPage(1);
    fetch(
      `https://pixabay.com/api/?key=${
        process.env.REACT_APP_PIXABAY_API_KEY
      }&q=${term}&image_type=photo&pretty=true&per_page=${perPage}&page${1}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
        console.log(data);
      })

      .catch((err) => console.log(err));
  }, [term, perPage]);

  const fetchImages = () => {
    if (images.length + perPage > 200) {
      setHasMore(false);
      return;
    }

    fetch(
      `https://pixabay.com/api/?key=${
        process.env.REACT_APP_PIXABAY_API_KEY
      }&q=${term}&image_type=photo&pretty=true&per_page=${perPage}&page=${
        page + 1
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
      })
      .catch((err) => console.log(err))
      .finally(() => setPage((prevPage) => prevPage + 1));
  };

  return (
    <ThemeProvider theme={theme}>
      <Title />
      <ImageSearch searchText={(text) => setTerm(text)} />
      <Scroll showBelow={150} />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={hasMore}
      >
        <Container className={classes.container}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {!isLoading && images.length === 0 && (
              <Typography className={classes.typo} variant="h6">
                No images found!
              </Typography>
            )}

            {isLoading ? (
              <Typography className={classes.typo} variant="h6">
                <CircularProgress /> Loading..{" "}
              </Typography>
            ) : (
              <Grid container spacing={3}>
                {images.map((image) => (
                  <Grid key={image.id} item xs={12} sm={6} md={6} lg={4}>
                    <ImageCard image={image} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Container>
      </InfiniteScroll>
    </ThemeProvider>
  );
}

export default App;
