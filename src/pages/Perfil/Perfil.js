import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import "./Perfil.css"
import { Typography, Input} from "@mui/material";
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
            <div className="Retangulo">
                <div className="container_perfil">
                     <div className="line">
                         <div className="column">
                            <div className="linha">
                                <h1 className="texto_formulario">Nome de Usuário: </h1>
                                <button className='botaoeditar'> editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder=""></Input>
                            </div>
                         </div>
                         <div className="column">
                            <div className="linha">
                                <h1 className="texto_formulario">Cidade: </h1>
                                <button className='botaoeditar'> editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder=""></Input>
                            </div>
                         </div>
                     </div>
                     <div className="line">
                        <div className="column">
                            <div className="linha">
                                <h1 className="texto_formulario">Endereço de email: </h1>
                                <button className='botaoeditar'> editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder=""></Input>
                            </div>
                        </div>
                        <div className="column">
                            <div className="linha">
                                <h1 className="texto_formulario">Endereço: </h1>
                                <button className='botaoeditar'> editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder=""></Input>
                            </div>
                        </div>
                     </div>
                     <div className="line">
                        <button  className='botao_sair'>Sair da Conta</button>
                     </div>
                </div>
            </div>
            <Typography><h1 className="texto_perfil">Itens selecionados: </h1></Typography>
            <div className="Retangulo">

            </div>
            <img src="/images/Cardapio.png" alt="logocardapio" className="logocarda"></img>
        </div>

    );
    
    
}

export default Perfil;