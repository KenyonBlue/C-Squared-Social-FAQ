import React, { useEffect } from "react";
import FrequentlyAsked from './pages/frequently-asked';
import { Container, Grid } from "@material-ui/core";
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/post'



function App() {
  
  const dispatch = useDispatch();
 
useEffect(() => {
  dispatch(getPosts())
}, [dispatch])

  return (
    <>
    <FrequentlyAsked/>
    <Container>
      <Grid container justify="space-between" alignItems="stretch" spacing={1}>
        <Grid item xs={12} sm={7}>
          <Posts></Posts>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form></Form>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default App;