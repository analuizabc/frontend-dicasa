import { List, ListItem, ListItemText, Typography, Toolbar,AppBar} from "@mui/material";
import { Form, Button} from "react-bootstrap";
import React from "react";
import "./Footer.css";


function Footer(props) {
return( 

    <>
    {props.children}
   
        <div className="paginaFooter">
            
                    <div className="containerFooter" >  

                        <div className="containerEsquerda">
                            
                           
                            <div className="iconeTexto1">

                              
                                <img src="/images/Whatsapp.png" className="imgWhatsapp"/>

                                   
                                   <h1 className="text1">Telefone: 31 9 9593-1173</h1>
                                  
                             
                            </div>
                        
                                <div className="iconeTexto1">

                              
                                    <img src="/images/E-mail.png" className="imgEmail"/>
                                        
                                        <h1 className="text1">E-mail: dicasa@lanchessaudaveis.com.br</h1>
                                
                            
                                
                                </div>  

                                    <div className="iconeTexto1">
                                       
                                        <img src="/images/Localização.png" className="imgLocal"/>
                                            
                                        <h1 className="text1">Endereço: Av. Antônio Carlos, 6627, Belo Horizonte - MG</h1>
                                        
                                      
                                    </div>
                        </div>


                        <div className="containerDireita">
                    
            
                            <a href="https://www.facebook.com/Dicasa-Lanches-saud%C3%A1veis-100846982624432"target="_black"><img src="/images/Facebook.png" className="imgFacebook"/> 
                                </a>   
                                
                                    <a href="https://twitter.com/DicasaLanches"target="_black"><img src="/images/twitter.png" className="imgTwitter"/>
                                        </a>  
                                            
                                            <a href="https://www.instagram.com/dicasa.lanchessaudaveis/"target="_black"><img src="/images/instagram.png" className="imgInstagram"/>
                                                </a>

                                
                        </div>


        </div>

                    
        
     </div>
        
        
   
 
        </>
      
);
}
export default Footer;