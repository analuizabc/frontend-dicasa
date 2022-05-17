import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import "./Perfil.css"
import { Typography } from "@mui/material";
import { Form, Button} from "react-bootstrap";


function Perfil() {
    const [NomedeUsuario, setNomeDeUsuario]=useState();
    const [Cidade, setCidade]=useState();
    const [EndereçodeEmail, setEndereçodeEmail]=useState();
    const [Endereço, setEndereço]=useState();
    
    return (
        <div className="Perfil">
            <Typography><h1 className="NoteTitle_perfil">Perfil</h1></Typography>
            <Typography><h1 className="texto_perfil">Detalhes da conta: </h1></Typography>
            <div className="Retangulo1">

            </div>
        </div>

    );
    
    
}

export default Perfil;