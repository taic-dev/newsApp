import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Location = () => {
  const [prefectures, setPrefectures] = useState([""]);
  const [city, setCity] = useState([""]);
  const [town, setTown] = useState(["神田多町"]);
  const [selectPrefectures, setSelectPrefectures] = useState("東京都");
  const [selectCity, setSelectCity] = useState("千代田区");
  const [selectTown, setSelectTown] = useState("神田多町");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prefecturesURL = "http://localhost:3001/prefectures";
        let prefecturesResponse = await axios.get(prefecturesURL);
        setPrefectures(prefecturesResponse.data.response.prefecture);

        const cityURL = "http://localhost:3001/city";
        let cityResponse = await axios.get(cityURL);
        setCity(cityResponse.data.response.location);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const changePrefectures = async (e) => {
    let prefecture = e.target.value;
    setSelectPrefectures(prefecture);

    const changePrefecturesURL = "http://localhost:3001/change-city";
    let getCityInfo = await axios.post(changePrefecturesURL, {
      prefecture: prefecture,
    });

    setCity(getCityInfo.data.response.location);
    setSelectCity(getCityInfo.data.response.location[0].city);
  };

  const settingLocation = async (e) => {
    setSelectCity(e.target.value);

    const settingLocationURL = "http://localhost:3001/setting-location";
    const getTownInfo = await axios.post(settingLocationURL, {
      selectPrefectures: selectPrefectures,
    });

    const getTown = getTownInfo.data.response.location.filter(
      (townInfo, index) => townInfo.city == selectCity
    );

    const townArray = getTown.map((townName) => townName.town)
    setTown(townArray);
    setSelectTown(townArray[0]);
  };

  const settingTown = e => setSelectTown(e.target.value);

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
          onChange={settingLocation}
        >
          {city.map((cityObj, index) => {
            return (
              <MenuItem key={index} value={cityObj.city}>
                {cityObj.city}
              </MenuItem>
            );
          })}
        </Select>

        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="町域名"
          value={selectTown}
          onChange={settingTown}
        >
          {town.map((townValue, index) => {
            return (
              <MenuItem key={index} value={townValue}>
                {townValue}
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
