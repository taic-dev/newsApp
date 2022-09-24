import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Location = () => {
  const [prefectures, setPrefectures] = useState([""]);
  const [city, setCity] = useState([""]);
  const [selectPrefectures, setSelectPrefectures] = useState("東京都");
  const [selectCity, setSelectCity] = useState("千代田区");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prefecturesURL = "http://localhost:3001/prefectures";
        let prefecturesResponse = await axios.get(prefecturesURL);
        setPrefectures(prefecturesResponse.data.response.prefecture);
    
        const cityURL = "http://localhost:3001/city";
        let cityResponse = await axios.get(cityURL);
        setCity(cityResponse.data.response.location)

      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const changePrefectures = (e) => setSelectPrefectures(e.target.value);
  const changeCity = (e) => setSelectCity(e.target.value);

  return (
    <main>
      <div className="location-main">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="都道府県"
          value={selectPrefectures}
          onChange={changePrefectures}
        >
          {prefectures.map((prefecture, index) => {
            return (
              <MenuItem key={index} value={prefecture}>
                {prefecture}
              </MenuItem>
            );
          })}
        </Select>

        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="市区町村"
          value={selectCity}
          onChange={changeCity}
        >
          {city.map((cityObj, index) => {
            return (
              <MenuItem key={index} value={cityObj.city}>
                {cityObj.city}
              </MenuItem>
            );
          })}
        </Select>
        <Button variant="contained">設定する</Button>
      </div>
    </main>
  );
};

export default Location;
