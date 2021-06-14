import React from "react";
import useStyles from "./post-styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@material-ui/core";
import {
  AccessTime,
  DeleteForever,
  MoreHoriz,
} from "@material-ui/icons";
import moment from "moment";
import { useDispatch } from 'react-redux'
import { deletePost, likePost, updatePost } from "../../../actions/post"

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
  const dispatch = useDispatch();

  const handleRadioChange = (id, status) => {
    const updated = { ...post, bugStatus: status }
    dispatch(updatePost(id , updated))
  }

  return (
    <Card className={classes.card}>
      {true && <Card className={classes.media} title={post.title}></Card>}
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <Typography
          style={{ fontWeight: 300, margin: 8 }}
          className={classes.title}
          variant="subtitle1"
          gutterBottom
        >
          {post.title}
        </Typography>
      </div>
      <CardContent style={{ padding: 0, maxHeight: 25 }}>
        <Typography className={classes.title} variant="subtitle1" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>

      <Grid className={classes.details}>
        <Grid item sm={12}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
        </Grid>
        <RadioGroup
        style={{flexDirection: 'row', width: '104%'}}
          aria-label="gender"
          name="gender1"
          value={post.bugStatus}
          onChange={(event) => handleRadioChange(post._id, event.target.value)}
        >
          <Grid item xs={12} style={{flexWrap: 'nowrap'}}>
          <FormControlLabel value="new" control={<Radio />} label="New" />
            <FormControlLabel value="active" control={<Radio />} label="Active" />
            <FormControlLabel
              value="complete"
              control={<Radio />}
              label="Complete"
            />
          </Grid>
        </RadioGroup>
      </Grid>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <AccessTime fontSize="small"></AccessTime>
          &nbsp; Hours Worked  &nbsp; {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteForever fontSize="small"></DeleteForever>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
