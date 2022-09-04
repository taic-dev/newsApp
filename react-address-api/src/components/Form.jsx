import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';



const Form = () => {
  return (
      <form action="#">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-number"
                    label="郵便番号 (ハイフン無しで入力)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    style={{margin: "50px 8px"}}
                />
                <div style={{flexWrap: "wrap"}}>
                    <TextField
                        required
                        id="standard-required"
                        label="都道府県"
                        variant="standard"
                        style={{width: "calc(50% - 16px)",margin: "50px 8px"}}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="市区町村"
                        variant="standard"
                        style={{width: "calc(50% - 16px)",margin: "50px 8px"}}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="町域名"
                        variant="standard"
                        style={{width: "calc(50% - 16px)",margin: "50px 8px"}}
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
      </form>
  )
}

export default Form
