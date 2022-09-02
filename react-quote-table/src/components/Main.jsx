import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { Typography, } from '@mui/material';
import { Container } from '@mui/system';
import MainItemLeft from './MainItemLeft';
import MainItemRight from './MainItemRight';
import MainItemQuoteTable from './MainItemQuoteTable';
import { useEffect, useState } from 'react';
import '../App.css';


function Main({ setAllInfo, totalPrice, setTotalPrice }) {
  const [allTableRow,setAllTableRow] = useState([
    {
      id: 0,
      content: "",
      unitPrice: 0,
      quantity: 0,
      price: 0,
    }
  ]);

  const addTableRow = e => {
  
    setAllTableRow([
      ...allTableRow,
        {
          id: allTableRow[allTableRow.length-1].id + 1,
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
  }

  const deleteTableRow = e => {
    const parentId = e.target.closest("tr").id;

    setAllTableRow(
      allTableRow.filter((row)=>(
        row.id != parentId
      ))
    )
  }

  useEffect(()=>{
    setTotalPrice(
      allTableRow.reduce((sum, row) => {
        return sum + row.price;
      },0)
    );

    setAllInfo([...allTableRow])
  },[allTableRow])

  return (
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
            deleteTableRow={deleteTableRow}
            totalPrice={totalPrice}
            allTableRow={allTableRow}
        />
        </main>
    </Container>
  );
}

export default Main;
