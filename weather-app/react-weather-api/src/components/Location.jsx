import { Button, MenuItem, Select, TextField } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Location = () => {

    const [prefectures,setPrefectures] = useState(['']);
    const [selectPrefectures,setSelectPrefectures] = useState('東京都');

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const baseURL = "http://localhost:3001/prefectures";
                let response = await axios.get(baseURL);
                setPrefectures(response.data.response.prefecture);
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    },[]);

    const changePrefectures = e => setSelectPrefectures(e.target.value);

  return (
    <main>
      <div className='location-main'>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="都道府県"
          value={selectPrefectures}
          onChange={changePrefectures}
        >
            {prefectures.map((prefecture,index)=>{
                return(
                    <MenuItem key={index} value={prefecture}>
                        {prefecture}
                    </MenuItem>
                );
            })}
        </Select>

        <TextField
            id="standard-select-currency"
            select
            label="市"
            helperText="市を選択してください"
            variant="standard"
            >
            <MenuItem>
                テスト
            </MenuItem>
        </TextField>
        <Button variant="contained">設定する</Button>
      </div>
    </main>
  )
}

export default Location
