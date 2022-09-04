import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextFieldAddress from './TextFieldAddress';

const Form = () => {
  const [address,setAddress] = useState("");
  const [get,setGet] = useState(null);

  useEffect(() => {
    const baseURL = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${address}`;
    axios.get(baseURL).then((response)=>{
      setGet(response.data);
    })
  },[address]);

  console.log(get);

  return (
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <TextFieldAddress 
          address={address} 
          setAddress={setAddress}
        />
        <div style={{flexWrap: "wrap"}}>
            <TextField
                required
                id="standard-required"
                label="都道府県"
                variant="standard"
                style={{width: "calc(50% - 16px)",margin: "50px 8px"}}
                value={ get !== null && get.status !== 400 && get.results !== null ? get.results[0].address1 : "" }
            />
            <TextField
                required
                id="standard-required"
                label="市区町村"
                variant="standard"
                style={{width: "calc(50% - 16px)",margin: "50px 8px"}}
                value={ get !== null && get.status !== 400 && get.results !== null ? get.results[0].address2 : "" }
            />
            <TextField
                required
                id="standard-required"
                label="町域名"
                variant="standard"
                style={{width: "calc(50% - 16px)",margin: "50px 8px"}}
                value={ get !== null && get.status !== 400 && get.results !== null ? get.results[0].address3 : "" }
            />
            <TextField
                required
                id="standard-required"
                label="マンション名 / その他"
                variant="standard"
                style={{width: "calc(50% - 16px)",margin: "50px 8px"}}
            />
        </div>
    </Box>
  )
}

export default Form
