import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Toolbar, Typography, Button, Box, AppBar } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Main from './Main'
import Pdf from './Pdf'
import React, { useState } from 'react'

const Header = () => {
    const [allInfo,setAllInfo] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);

  return (
    <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{color: "#fff"}}>お見積書 作成システム</Link>
                </Typography>
                <Link to="/pdf">
                    <PictureAsPdfIcon />
                </Link>
                </Toolbar>
            </AppBar>
        </Box>

        <Switch>
            <Route exact path="/">
                <Main setAllInfo={setAllInfo} totalPrice={totalPrice} setTotalPrice={setTotalPrice}></Main>
            </Route>
            <Route exact path="/pdf">
                <Pdf allInfo={allInfo} totalPrice={totalPrice}></Pdf>
            </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default Header
