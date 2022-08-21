import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Typography, } from '@mui/material';
import React from 'react'

const MainItemQuoteTable = () => {
  return (
    <div className="main-quote-table">
        <div className="main-textarea">
            <TextField id="outlined-disabled" label="合計金額" variant="standard" disabled />
        </div>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>作業内容</TableCell>
                <TableCell>数量</TableCell>
                <TableCell>単価</TableCell>
                <TableCell>金額</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableCell><TextField id="outlined-required" label="No" variant="standard" /></TableCell>
                <TableCell><TextField id="outlined-required" label="作業内容" variant="standard" /></TableCell>
                <TableCell><TextField id="outlined-required" label="数量" variant="standard" /></TableCell>
                <TableCell><TextField id="outlined-required" label="単価" variant="standard" /></TableCell>
                <TableCell><TextField id="outlined-required" label="金額" variant="standard" /></TableCell>
            </TableBody>
        </Table>
        <div className="main-button">
            <Button variant="outlined">追加</Button>
        </div>
    </div>
  )
}

export default MainItemQuoteTable
