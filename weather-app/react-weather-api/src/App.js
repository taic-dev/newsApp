import { makeStyles } from '@material-ui/core';
import './App.css';
import { Reset } from 'styled-reset'
import Header from './components/Header';
import Main from './components/Main';

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "450px",
    margin: "auto"
  }
}))

function App() {

  const classes = useStyles();

  return (
    <>
      <Reset />
      <div className={classes.wrapper}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
