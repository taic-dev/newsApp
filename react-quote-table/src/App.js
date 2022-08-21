import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Typography, } from '@mui/material';
import { Container } from '@mui/system';
import MainItemLeft from './components/MainItemLeft';
import MainItemRight from './components/MainItemRight';
import MainItemQuoteTable from './components/MainItemQuoteTable';
import { useState } from 'react';
import './App.css';


function App() {
  const [allTableRow,setAllTableRow] = useState([
    {no: "",content: "",quantity: "",unitPrice: "",price: ""},
  ]);

  const [tableRow,setTableRow] = useState([
    {no: "",content: "",quantity: "",unitPrice: "",price: ""}
  ]);

  const [price,setPrice] = useState(0);

  const addTableRow = () => {
    setTableRow([...tableRow,{no: "",content: "",quantity: "",unitPrice: "",price: ""}])
  }

  const changePrice = e => {
    console.log(e);
    setPrice(e.target.value);
  }

  console.log(tableRow)

  const changeTableCell = e => {
    const {name,value} = e.target;
    console.log(name);
    setAllTableRow({...allTableRow,[name]: value})
  }

  return (
    <>
      <Toolbar component="header">
        <Typography variant="h6">
          お見積書 作成システム
        </Typography>
      </Toolbar>
      <Container>
        <main className="main">
          <Typography style={{fontSize: "25px",textAlign: "center"}} component="h2" variant="h2">お見積書</Typography>
          <div className="main-wrapper">
            <MainItemLeft />
            <MainItemRight />
          </div>
          <MainItemQuoteTable changePrice={changePrice} price={price} tableRow={tableRow} addTableRow={addTableRow} changeTableCell={changeTableCell} />
        </main>
      </Container>
    </>
  );
}

export default App;
