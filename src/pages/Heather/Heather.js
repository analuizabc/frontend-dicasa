import { AppBar, List, ListItem, ListItemText, Toolbar, Typography, } from "@mui/material"
import React from "react";
import { IconContext } from "react-icons/lib";
import { FaHome } from "react-icons/fa";
import {  RiUserFill } from "react-icons/ri"
import "./Heather.css";


function Heather(props) {
    
    return (
        <div className="body">
        <AppBar position="static" className="appbar">         
            <Toolbar className="toolBar">
               <img src="/images/LOGO3.png" alt="logodicasa" className="img"/>
            <List className="list">   
                <ListItem button onClick={() => {
                    window.location.href="/home";
                    }}
                  >
                    <IconContext.Provider value={{ color: "#6F4834", size: "49px" }}>
                      <FaHome />
                    </IconContext.Provider>
                    <ListItemText className="listItemText">         
                        <Typography><h1 className="h1">Home</h1></Typography>
                    </ListItemText>
                </ListItem>
            </List>
            <List className="list2">
                <ListItem button onClick={() => {
                    window.location.href="/cardapio";
                    }}>
                    <img src="/images/sacola2.png" alt="sacola" className="img2"/>
                    <ListItemText className="listItemText">
                        <Typography><h1 className="h1">Produtos</h1></Typography>
                    </ListItemText>
                </ListItem>
              </List>
              <List className="list">
                <ListItem button onClick={() => {
                    window.location.href="/perfil";
                    }}>
                    <IconContext.Provider value={{ color: "#6F4834", size: "48px" }}>
                      <RiUserFill />
                    </IconContext.Provider>
                    <ListItemText className="listItemText">
                        <Typography><h1 className="h1">Perfil</h1></Typography>
                    </ListItemText>
                </ListItem>
              </List>
            </Toolbar>
        </AppBar>
     {props.children}
     </div>
    );
}

export default Heather;


