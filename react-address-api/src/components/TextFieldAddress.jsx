import { TextField } from '@mui/material'
import React, { useState } from 'react'

const TextFieldAddress = ({ address, get, setAddress, inputError, setInputError }) => {

  const getAddress = e => {
    setAddress(e.target.value);
    e.target.value.length < 7 ? setInputError(get.message) : setInputError(null);
  }

  return (
    <TextField
        id={inputError == null ? "standard-number" : "standard-error-helper-text"}
        label="郵便番号 (ハイフン無しで入力)"
        type="number"
        InputLabelProps={{
            shrink: true,
        }}
        helperText={inputError}
        variant="standard"
        style={{margin: "50px 8px"}}
        onChange={getAddress}
    />
  )
}

export default TextFieldAddress
