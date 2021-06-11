import React, { useEffect, useState } from "react";
import useStyles from "./form-styles";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from "../../actions/post";
import { useSelector } from "react-redux";

interface PostData {
  creator: string;
  title: string;
  tags: string;
  message: string;
  selectedFiles: any;
}

const Form = ({currentId, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state: any) => currentId ? state.posts.find((post) => post._id) : null ) ; 
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectedFiles: "",
  });

  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentId) {
      dispatch(updatePost( currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
  };


const clearForm = () => {
  return console.log("form cleared");
}

  const handleChange = (postData: PostData) => {    
    return setPostData(postData);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form} `}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> Create Bug</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            handleChange({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => handleChange({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            handleChange({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => handleChange({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) =>
              handleChange({ ...postData, selectedFiles: base64 })
            }
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size={'large'} type='submit' fullWidth>submit</Button>
        <Button variant="contained" color="secondary" size={'small'} onClick={() => clearForm()}  fullWidth>clear</Button>
      </form>
    </Paper>
  );
};

export default Form;

