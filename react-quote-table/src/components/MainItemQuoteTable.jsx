import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, } from '@mui/material';
import React from 'react'

const MainItemQuoteTable = ({ changeTableCell, addTableRow, totalPrice, allTableRow, }) => {
  return (
    <div className="main-quote-table">
        <div className="main-textarea">
            <TextField id="standard-read-only-input" label="合計金額" variant="standard" defaultValue="0" value={totalPrice} />
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
                {console.log(allTableRow)}
                {allTableRow.map((value,key)=>{
                    return(
                        <TableRow key={value.id} id={value.id}>
                            <TableCell>{value.id+1}</TableCell>
                            <TableCell><TextField onChange={changeTableCell} id="outlined-required" label="作業内容" variant="standard" name='content' /></TableCell>
                            <TableCell><TextField onChange={changeTableCell} id="standard-number" label="単価" defaultValue="0" type="number"  name='unitPrice' variant="standard"/></TableCell>
                            <TableCell><TextField onChange={changeTableCell} id="standard-number" label="数量" defaultValue="0" type="number"  name='quantity' variant="standard"/></TableCell>
                            <TableCell><TextField id="standard-read-only-input" label="金額" InputProps={{ readOnly: true, }} variant="standard" name="price" value={value.price} /></TableCell>
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
