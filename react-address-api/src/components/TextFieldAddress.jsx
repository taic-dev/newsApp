import { TextField } from '@mui/material'
import React, { useState } from 'react'

const TextFieldAddress = ({ address, setAddress }) => {

  const getAddress = e => setAddress(e.target.value);

  return (
    <TextField
        id="standard-number"
        label="郵便番号 (ハイフン無しで入力)"
        type="number"
        InputLabelProps={{
            shrink: true,
        }}
        inputProps={{ 
            maxLength: 4, 
            pattern: "^[a-zA-Z0-9_]+$"
        }}
        variant="standard"
        style={{margin: "50px 8px"}}
        onChange={getAddress}
    />
  )
}

export default TextFieldAddress
