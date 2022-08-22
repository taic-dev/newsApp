import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Typography, } from '@mui/material';
import { Container } from '@mui/system';
import MainItemLeft from './components/MainItemLeft';
import MainItemRight from './components/MainItemRight';
import MainItemQuoteTable from './components/MainItemQuoteTable';
import { useState } from 'react';
import './App.css';


function App() {

  const randomString = Math.random().toString(32).substring(2);

  const [price,setPrice] = useState(0);

  const [tableRow,setTableRow] = useState([
    {
      [randomString]:{
        content: "",
        unitPrice: "",
        quantity: "",
        price: ""
      }
    }
  ]);

  const [allTableRow,setAllTableRow] = useState([
    {
      [randomString]:{
        content: "",
        unitPrice: "",
        quantity: "",
        price: ""
      }
    }
  ]);
  
  const addTableRow = () => {
    setAllTableRow([
      ...allTableRow,
      {
        [randomString]:{
          content: "",
          unitPrice: "",
          quantity: "",
          price: ""}
        }
      ])
  }

  const changePrice = e => {
    console.log(e);
    setPrice(e.target.value);
  }

  const changeTableCell = e => {
    const parentId = e.target.closest("tr").id;
    const {name,value} = e.target;
    console.log(name);
    console.log(parentId);

    // allTableRow.map((row)=>{
    //   let rowObject = row[parentId];
    //   rowObject.[name] = value
    //   console.log(rowObject);
    // });

    console.log(allTableRow);
    console.log(allTableRow.flat());


    setAllTableRow([...allTableRow,{[parentId]:{[name]: value}}])
  }

  console.log(allTableRow)

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
