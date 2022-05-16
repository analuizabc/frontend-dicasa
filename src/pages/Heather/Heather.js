import { AppBar, List, ListItem, ListItemText, Toolbar, Typography, Drawer, IconButton } from "@mui/material"
import React, { useState } from "react";
import "./Heather.css";
import { FiMenu } from "react-icons/fi"


function Heather(props) {
    const [open, setOpen] = useState(false);

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }

    return (
    <div>
    <div>
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
    
    </div>
    
    <div className="menu">
     <AppBar position="static">
         <Toolbar className="toolBar">
             <IconButton edge="start" aria-label="sanduiche" onClick={() => handleDrawer(!open)}>
                 <FiMenu/>
             </IconButton>
             <div className="logomobile">
             <img src="/images/LOGO3.png" alt="logodicasa" className="img3"></img>
             </div>
         </Toolbar>
     </AppBar>
     </div>
     <div>
     <Drawer open={open} onClose={() => handleDrawer(false)}  className="menu">
         <List className="drawer">
             <ListItem button onClick={()=> { window.location.href="/home"}}>
             <img src="/images/iconecasa.png" alt="casa" className="img2"></img>   
             <Typography><h1 className="nomemenu">Home</h1></Typography>
             </ListItem>
             <ListItem button onClick={()=> { window.location.href="/cardapio"}}>
             <img src="/images/sacola2.png" alt="sacola" className="img2"/>   
             <Typography><h1 className="nomemenu">Produtos</h1></Typography>
             </ListItem>
             <ListItem button onClick={()=> { window.location.href="/perfil"}}>
             <img src="/images/iconeperfil.png" alt="perfil" className="img2"/>
             <Typography><h1 className="nomemenu">Perfil</h1></Typography>
             </ListItem>   
         </List>
     </Drawer>
    </div>
</div>
 {props.children}
</div>
    );
}

export default Heather;


