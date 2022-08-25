import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Typography, } from '@mui/material';
import { Container } from '@mui/system';
import MainItemLeft from './components/MainItemLeft';
import MainItemRight from './components/MainItemRight';
import MainItemQuoteTable from './components/MainItemQuoteTable';
import { useCallback, useState } from 'react';
import './App.css';


function App() {

  const [totalPrice,setTotalPrice] = useState();
  const [allTableRow,setAllTableRow] = useState([
    {
      id: 0,
      content: "",
      unitPrice: 0,
      quantity: 0,
      price: 0,
    }
  ]);
  
  const addTableRow = () => {
    setAllTableRow([
      ...allTableRow,
        {
          id: allTableRow.length,
          content: "",
          unitPrice: 0,
          quantity: 0,
          price: 0,
        }
      ]);
  }

  const changeTableCell = e => {
    const {name,value} = e.target;
    const parentId = e.target.closest("tr").id;

    setAllTableRow(
      [...allTableRow],
      allTableRow[parentId][name] = value,
      allTableRow[parentId].price = allTableRow[parentId].unitPrice * allTableRow[parentId].quantity
    );
    
    setTotalPrice(allTableRow.reduce((sum, row) => {
      return sum + row.price;
    },0));
  }

  console.log(allTableRow);

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
          <MainItemQuoteTable 
            changeTableCell={changeTableCell}
            addTableRow={addTableRow}
            totalPrice={totalPrice}
            allTableRow={allTableRow}
          />
        </main>
      </Container>
    </>
  );
}

export default App;
