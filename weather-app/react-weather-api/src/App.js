import { makeStyles } from "@material-ui/core";
import "./App.css";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Location from "./components/Location";

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "450px",
    margin: "auto",
  },
}));

function App() {
  const classes = useStyles();
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [buttonColor, setButtonColor] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const baseURL = "http://localhost:3001/";
        let response = await axios.get(baseURL);
        setWeatherInfo(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>読込中</p>;
  }

  return (
    <>
      <div className={classes.wrapper}>
        <Reset />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {weatherInfo !== null && <Main weatherInfo={weatherInfo} />}
            </Route>
            <Route path="/location">
              <Location />
            </Route>
          </Switch>
          <Footer buttonColor={buttonColor} setButtonColor={setButtonColor} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
