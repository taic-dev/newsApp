import React from 'react'
import { TextField, Toolbar, Typography, } from '@mui/material';

const MainItemLeft = () => {
  return (
        <div className="main-item main-item__left">
            <div className="main-textarea">
                <TextField id="outlined-required" label="会社名" variant="standard" />
                <span>御中</span>
            </div>
            <div className="main-textarea">
                <TextField id="outlined-required" label="ご担当者" variant="standard" />
                <span>様</span>
            </div>
            <div className="main-textarea">
                <TextField id="outlined-required" label="件名" variant="standard" fullWidth />
            </div>
            <p>下記の通り、お見積り申し上げます。</p>
            <div className="main-textarea">
                <TextField id="outlined-required" label="納期" variant="standard" />
            </div>
            <div className="main-textarea">
                <TextField id="outlined-required" label="支払い条件" variant="standard" />
            </div>
            <div className="main-textarea">
                <TextField id="outlined-required" label="有効期限" variant="standard" />
            </div>
        </div>
  )
}

export default MainItemLeft
