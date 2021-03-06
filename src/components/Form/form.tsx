import React, { useEffect, useState } from "react";
import useStyles from "./form-styles";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/post";
import { useSelector } from "react-redux";

interface PostData {
  creator: string;
  title: string;
  tags: string;
  message: string;
  selectedFiles: any;
}

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectedFiles: "",
  });
  // const [ title, setTitle ] = useState<String>("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state: any) => {
    return currentId
      ? state.posts.find((post) => {
          return post._id === currentId;
        })
      : null;
  });


  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clearForm()
  };

  const clearForm = () => {
    setCurrentId(null)
    setPostData({
      creator: "",
      title: "",
      tags: "",
      message: "",
      selectedFiles: "",
    })
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form} `}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> {currentId ? 'edit bug' : 'create bug'}</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })
}
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="description"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="bug_id"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) =>
              setPostData({ ...postData, selectedFiles: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size={"large"}
          type="submit"
          fullWidth
        >
          submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size={"small"}
          onClick={() => clearForm()}
          fullWidth
        >
          clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;