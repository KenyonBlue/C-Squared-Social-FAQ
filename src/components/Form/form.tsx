import React, { useState } from "react";
import useStyles from "./form-styles";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import FIleBase from "react-file-base64";
import { clear } from "console";

interface PostData {
  creator: string;
  title: string;
  tags: string;
  message: string;
  selectedFiles: string;
}

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectedFiles: "",
  });

  const handleSubmit = () => {
    return console.log("form submitted");
  };


const clearForm = () => {
  return console.log("form cleared");
}

  const handleChange = (postData: PostData) => {
    return setPostData(postData);
  };



  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form} `}
        // onSubmit={handleSubmit()}
      >
        <Typography variant="h6"> Creating a Memory</Typography>
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
          <FIleBase
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

