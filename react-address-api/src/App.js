import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container alignItems="center" justifyContent="center" style={{height: "100vh"}}>
      <Grid item xs={8}>
        <Title />
        <Form />
      </Grid>
    </Grid>
  );
}

export default App;
