import { Button, Input, InputAdornment, Table, TableBody, TableCell, TableHead, TableRow, TextField, } from '@mui/material';
import React from 'react'

const MainItemQuoteTable = ({ allTableRow, addTableRow, changeTableCell, price, changePrice }) => {
  return (
    <div className="main-quote-table">
        <div className="main-textarea">
            <Input
            id="standard-adornment-amount"
            value={price}
            startAdornment={<InputAdornment position="start">￥</InputAdornment>}
            disabled
            />
        </div>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>作業内容</TableCell>
                <TableCell>単価</TableCell>
                <TableCell>数量</TableCell>
                <TableCell>金額</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {allTableRow.map((row,key)=>{
                    return(
                        <TableRow id={Object.keys(row)}>
                            <TableCell>{key+1}</TableCell>
                            <TableCell><TextField onChange={changeTableCell} id="outlined-required" label="作業内容" variant="standard" name='content' /></TableCell>
                            <TableCell><TextField onChange={changeTableCell} id="outlined-required" label="単価" variant="standard" name='unitPrice' /></TableCell>
                            <TableCell><TextField onChange={changeTableCell} id="outlined-required" label="数量" variant="standard" name='quantity' /></TableCell>
                            <TableCell><TextField onChange={e=>{changeTableCell(e); changePrice(e);}} id="outlined-required" label="金額" variant="standard" name='price' /></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
        <div className="main-button">
            <Button variant="outlined" onClick={addTableRow}>追加</Button>
        </div>
    </div>
  )
}

export default MainItemQuoteTable
