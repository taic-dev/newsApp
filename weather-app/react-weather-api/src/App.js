import { makeStyles } from '@material-ui/core';
import './App.css';
import { Reset } from 'styled-reset'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "450px",
    margin: "auto"
  }
}))

function App() {

  const classes = useStyles();
  const [weatherInfo,setWeatherInfo] = useState(null);
  const [buttonColor, setButtonColor] = useState(0);

  useEffect(()=>{
      (async()=>{

        const baseURL = "http://localhost:3001/";
        let response = await axios.get(baseURL);
        setWeatherInfo(response.data);
        
      })();
      
      console.log(weatherInfo);
      console.log(2222)
  },[]);

  return (
    <>
      <Reset />
      <div className={classes.wrapper}>
        <Header />
        <Main weatherInfo={weatherInfo} />
        <Footer buttonColor={buttonColor} setButtonColor={setButtonColor} />
      </div>
    </>
  );
}

export default App;
