import  React,{createContext,useContext, useState} from 'react';
import './Nav.css';
import CardMedia from '@mui/material/CardMedia';
import {
  AppBar,
  Toolbar,
  CssBaseline
} from "@material-ui/core";
import { Context } from "../Contexts/Context";

import {Link} from 'react-router-dom'

export default function Nav() {
  const { open, setOpen } = useContext(Context);

const  searchHandler = (e) => {
    setOpen(e.target.value)
}

  return ( 
            <AppBar position="static" >
            <CssBaseline />
            <div className='display-f'>
                <Link to="/real-estate"><CardMedia component="img" className='logo' image="/asset/logo.jpeg"alt=""/></Link>
                <Toolbar >
                    <Link className='navigation-bar' to="/real-estate" > Listing</Link>
                    <Link className='navigation-bar' to="/map"> Map</Link>
                </Toolbar>
                <input className="input"placeholder="Search…"  onChange={searchHandler} />
            </div>
            </AppBar>
  )
}
