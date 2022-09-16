import { makeStyles } from '@material-ui/core';
import './App.css';
import { Reset } from 'styled-reset'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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
        <Footer />
      </div>
    </>
  );
}

export default App;
