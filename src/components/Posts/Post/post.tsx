import React from "react";
import useStyles from "./post-styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import {
  ThumbUpAltTwoTone,
  DeleteForever,
  MoreHoriz,
} from "@material-ui/icons";
import moment from "moment";
export interface PostFace {
  selectedFile: any;
  title: string;
  tags: string[];
  likeCount: number;
  createdAt: Date;
  creator: string;
  message: string;
}

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {true && <Card
        className={classes.media}
        title={post.title}
      ></Card>}
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {setCurrentId(post._id)}}>
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <CardContent style={{padding: 0}}>
        <Typography className={classes.title} variant="subtitle1" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltTwoTone fontSize="small"></ThumbUpAltTwoTone>
          {` Like ${post.likeCount}`}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteForever fontSize="small"></DeleteForever>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
