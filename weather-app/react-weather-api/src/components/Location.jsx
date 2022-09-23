import { Button, MenuItem, TextField } from '@material-ui/core'
import React from 'react'

const Location = () => {
  return (
    <main>
      <div className='location-main'>
        <TextField
            id="standard-select-currency"
            select
            label="都道府県"
            helperText="都道府県を選択してください"
            variant="standard"
            >
            <MenuItem>
                テスト
            </MenuItem>
        </TextField>
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
