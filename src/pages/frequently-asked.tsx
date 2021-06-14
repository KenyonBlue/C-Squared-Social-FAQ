
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CSquaredLogo from '../components/c-squared-logo';
import companyLogo from '../assets/better_logo.png';




const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    display: 'flex',
    backgroundColor: 'rgb(31, 31, 31)',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const FrequentlyAsked = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" style={{backgroundColor: "#1f1f1f", justifyContent: "center", alignItems: "center", display: "flex"}} className={classes.appBar}>
        <Toolbar>
        <CSquaredLogo></CSquaredLogo>
          <Typography variant="h6" color="inherit" noWrap>
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <img style={{height: 30}} src={companyLogo}/>
          <Typography component="h1" variant="h5" style={{color: 'whitesmoke', marginLeft: 5}} align="center">
            {`BUG TRACKER`}
          </Typography>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default FrequentlyAsked;