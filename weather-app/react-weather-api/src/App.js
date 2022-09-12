import { makeStyles } from '@material-ui/core';
import './App.css';
import Header from './components/Header';

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "450px",
    margin: "auto"
  }
}))

function App() {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Header />
    </div>
  );
}

export default App;
