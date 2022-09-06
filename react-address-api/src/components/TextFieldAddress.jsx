import { TextField } from '@mui/material'

const TextFieldAddress = ({ address, get, setAddress, inputError, setInputError }) => {

  const getAddress = e => {
    setAddress(e.target.value);
    e.target.value.length < 7 ? setInputError(get.message) : setInputError(false);
  }

  return (
    <TextField
        id="standard-number"
        label="郵便番号 (ハイフン無しで入力)"
        type="number"
        InputLabelProps={{
            shrink: true,
        }}
        helperText={inputError}
        variant="standard"
        style={{margin: "50px 8px"}}
        color={!inputError ? "success" : "warning"}
        error={inputError}
        onChange={getAddress}
    />
  )
}

export default TextFieldAddress
