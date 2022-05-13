import { AppBar, List, ListItem, ListItemText, Toolbar, Typography, } from "@mui/material"
import React from "react";
import "./Heather.css";


function Heather(props) {
    
    return (
        <div className="appbar">
        <AppBar position="static">     
          <div className=" toolBar">
            <Toolbar className="toolBar">
               <img src="/images/LOGO3.png" alt="logodicasa" className="img"/>
            <List className="list">   
                <ListItem button onClick={() => {
                    window.location.href="/home";
                    }}
                  >
                    <img src="/images/iconecasa.png" alt="casa" className="img2"></img>
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
                    <img src="/images/iconeperfil.png" alt="perfil" className="img2"/>
                    <ListItemText className="listItemText">
                        <Typography><h1 className="h1">Perfil</h1></Typography>
                    </ListItemText>
                </ListItem>
              </List>
            </Toolbar>
            </div>    
        </AppBar>
     {props.children}
     </div>
    );
}

export default Heather;


