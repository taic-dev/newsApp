import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Typography, } from '@mui/material';
import { Container } from '@mui/system';
import MainItemLeft from './components/MainItemLeft';
import MainItemRight from './components/MainItemRight';
import MainItemQuoteTable from './components/MainItemQuoteTable';
import { useCallback, useState } from 'react';
import './App.css';


function App() {

  const [price,setPrice] = useState(0);

  const [allTableRow,setAllTableRow] = useState([
    {
      id: 0,
      content: "",
      unitPrice: "",
      quantity: "",
      price: "",
    }
  ]);
  
  const addTableRow = () => {
    setAllTableRow([
      ...allTableRow,
        {
          id: allTableRow.length,
          content: "",
          unitPrice: "",
          quantity: "",
          price: "",
        }
      ]);
  }

  const changeTableCell = e => {
    const {name,value} = e.target;
    const parentId = e.target.closest("tr").id;

    // setAllTableRow(allTableRow[parentId][name] = value);

    // allTableRow.map((row,index) => (row.id === parentId ? row[name] = value : row[name])
    // sports.map((sport, index) => (index === 2 ? "badminton" : sport))


    setAllTableRow(
      allTableRow.map(row => (
        {...allTableRow, 'id' : row.id == parentId ? row[name] = value : row[name]}
      ))
    );

    console.log(allTableRow);
  }

  console.log(allTableRow);

  const changePrice = e => {
    console.log(e);
    setPrice(e.target.value);
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
          <MainItemQuoteTable 
            changePrice={changePrice}
            changeTableCell={changeTableCell}
            addTableRow={addTableRow}
            price={price}
            allTableRow={allTableRow}
          />
        </main>
      </Container>
    </>
  );
}

export default App;
