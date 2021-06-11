import Post, { PostFace } from "./Post/post";
import useStyles from "./posts-styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import { Container } from "@material-ui/core";


const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state: any) => state.posts);

  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => {
            return (
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId}></Post>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Posts;
