import { List, ListItem, ListItemText, Typography, Toolbar,AppBar} from "@mui/material";
import { Form, Button} from "react-bootstrap";
import React from "react";
import "./Footer.css";


function Footer(props) {
return( 
   
    <div className="paginaFooter">
        
                 <div className="containerFooter" >  
                    <ListItemText className="listItemText">         
                        <Typography><h1 className="text1">Telefone: 31 9 9593-1173</h1></Typography>
                    </ListItemText>

                    <ListItemText className="listItemText">         
                        <Typography><h1 className="text2">E-mail: dicasa@lanchessaudaveis.com.br</h1></Typography>
                    </ListItemText>

                    <ListItemText className="listItemText">         
                        <Typography><h1 className="text3">Endereço: Av Antônio Carlos, 6627, Belo Horizonte - MG</h1></Typography>
                    </ListItemText>
                    
                <div className=" icons1">
                      
                      <img src="/images/Whatsapp.png" className="imgWhatsapp"/>
                      <img src="/images/E-mail.png" className="imgEmail"/>
                      <img src="/images/Localização.png" className="imgLocal"/>

                </div>
                </div>  
                    <div className="icons">


                <a href="https://www.facebook.com/Dicasa-Lanches-saud%C3%A1veis-100846982624432"><img src="/images/Facebook.png" className="imgFacebook"/>
                </a>   
            
                  <a href="https://twitter.com/DicasaLanches"><img src="/images/twitter.png" className="imgTwitter"/>
                  </a>  
                
                <a href="https://www.instagram.com/dicasa.lanchessaudaveis/"><img src="/images/instagram.png" className="imgInstagram"/>
                </a>
                    </div>
      


                         <img src="/images/Line 1.png" className="imgLinha"/>
    
    </div>
      
     
   
 
   
      
);
}
export default Footer;