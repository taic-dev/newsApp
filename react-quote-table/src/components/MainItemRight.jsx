import React from 'react'
import { TextField, Toolbar, Typography, } from '@mui/material';

const MainItemRight = () => {
  return (
    <div className="main-item main-item__right">
        <div className="main-textarea">
        <TextField id="outlined-required" label="見積もりNo." variant="standard" />
        </div>
        <div className="main-textarea">
        <TextField id="outlined-required" label="見積も日" variant="standard" />
        </div>
        <div className="main-textarea">
        <TextField id="outlined-required" label="自社名" variant="standard" />
        </div>
        <div className="main-textarea">
        <TextField id="outlined-required" label="〒" variant="standard" />
        </div>
        <div className="main-textarea">
        <TextField id="outlined-required" label="住所" variant="standard" />
        </div>
        <div className="main-textarea">
        <TextField id="outlined-required" label="電話番号" variant="standard" />
        </div>
        <div className="main-textarea">
        <TextField id="outlined-required" label="FAX" variant="standard" />
        </div>
        <div className="main-textarea">
        <TextField id="outlined-required" label="E-mail" variant="standard" />
        </div>
        <div className="main-textarea">
        <TextField id="outlined-required" label="担当" variant="standard" />
        </div>
    </div>
  )
}

export default MainItemRight
