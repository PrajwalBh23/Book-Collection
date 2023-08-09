import React, { useState } from 'react';
import { AppBar,Tabs, Tab, Toolbar , Typography } from '@mui/material'
import Libraryicon from '@mui/icons-material/Book';
import {NavLink} from 'react-router-dom';


function Header() {
  const [value, setValue] = useState();
  // Using these we can access the only link but using Routes we can access the content from that
  return (
    <>
      <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'>
        <Toolbar>
          <Typography>
            <Libraryicon />
          </Typography>

          <Tabs sx={{ml: "auto"}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={ NavLink } to="/add" label='Add Products'/>
            <Tab LinkComponent={ NavLink } to="/books" label='BOOKS'/>
            <Tab LinkComponent={ NavLink } to="/about" label='About Us'/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
