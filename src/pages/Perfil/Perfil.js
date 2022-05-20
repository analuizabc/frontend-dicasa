import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import "./Perfil.css"
import { Typography, Input} from "@mui/material";
import { Form, Button} from "react-bootstrap";
import Note from "../../components/Note";
import { useHistory } from "react-router-dom";

const notes = [
    {
        id: 1,
        src:"/images/Rectangle61.png",
        title: "Combo Sanduíche + Suco",
        description: "R$ 20,00",
        
    },
    {
        id: 2,
        src:"/images/Rectangle30.png",
        title: "Tapioca",
        description: "R$ 10,00",
    },
    {
        id: 3,
        src:"/images/Rectangle63.png",
        title: "Crepioca",
        description: "R$ 12,00",
    },
    {
        id: 4,
        src:"/images/Rectangle64.png",
        title: "Pastel Assado",
        description: "R$ 9,00",
    },
    {
        id: 5,
        src:"/images/Rectangle65.png",
        title: "Sanduíche Natural",
        description: "R$ 15,00",
    },
    {
        id: 6,
        src:"/images/Rectangle66.png",
        title: "Salada de Frutas",
        description: "R$ 10,00",
    },
    {
        id: 7,
        src:"/images/Rectangle67.png",
        title: "Salada Caesar",
        description: "R$ 15,00",
    },
    {
        id: 8,
        src:"/images/Rectangle68.png",
        title: "Saalada Tropical",
        description: "R$ 12,00",
    },
    {
        id: 9,
        src:"/images/Rectangle69.png",
        title: "Omelete",
        description: "R$ 13,50",
    },
    {
        id: 10,
        src:"/images/Rectangle70.png",
        title: "Suco Verde",
        description: "R$ 8,00",
    },
    {
        id: 11,
        src:"/images/Rectangle71.png",
        title: "Suco Natural",
        description: "R$ 6,00",
    },
    {
        id: 12,
        src:"/images/Rectangle72.png",
        title: "Vitamina",
        description: "R$ 9,00",
    },
]




function Perfil() {
    const [NomedeUsuario, setNomeDeUsuario]=useState();
    const [Cidade, setCidade]=useState();
    const [EndereçodeEmail, setEndereçodeEmail]=useState();
    const [Endereço, setEndereço]=useState();
    const [botaoVisivel, setBotaoVisivel]=useState(false);

    const history=useHistory();

    function sair(){
        history.push("home");
    }
   
    
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
                                <button className='botaoeditar'>Editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder=""></Input>
                            </div>
                         </div>
                         <div className="column">
                            <div className="linha">
                                <h1 className="texto_formulario">Cidade: </h1>
                                <button className='botaoeditar'>Editar</button>
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
                                <button className='botaoeditar'>Editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder=""></Input>
                            </div>
                        </div>
                        <div className="column">
                            <div className="linha">
                                <h1 className="texto_formulario">Endereço: </h1>
                                <button className='botaoeditar'>Editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder=""></Input>
                            </div>
                        </div>
                     </div>
                     <div className="line">
                        <button onClick={sair} className='botao_sair'>Sair da Conta</button>
                     </div>
                </div>
            </div>
            <Typography><h1 className="texto_perfil">Itens selecionados: </h1></Typography>
                <div className="noteContainer_perfil">
                    {notes.map((note) => (
                        <div className="produto_perfil">
                            <Note key={note.id} note={note} props={botaoVisivel} />
                        </div>
                    ))}
                </div>

            <img src="/images/logo2.png" alt="logofinal" className="logofinal"></img>
            
            
        </div>

    );
    
    
}

export default Perfil;