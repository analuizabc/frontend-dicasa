
import React, { useState, useEffect } from "react";
import "./Perfil.css"
import { Typography, Input} from "@mui/material";
import Note from "../../components/Note";
import api from "../../services/api";
import {getUserId, logout} from "../../services/auth";

function Perfil() {
    
    const [botaoVisivel]=useState(false);
    const [produtosUsuario, setProdutosUsuario] = useState([])
    const [dadosUsuario, setDadosUsuario] = useState({});
    const user_id = getUserId()
   
    function logoutUser() {
        logout()
        window.location.href="/home";
    }

    async function getProdutosUsuario() {
        try {
            const response = await api.get(`/produtouser/${user_id}`);
            setProdutosUsuario(response.data);
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }

    async function getDadosUsuario() {
        try {
            const response = await api.get(`/users/${user_id}`);
            console.log(response);
            setDadosUsuario(response.data);
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }


    function handleChange(e) {
        console.log(e);
        const {name, value} = e.target;
        return setDadosUsuario({...dadosUsuario,[name]:value})
    }



    async function putDadosUsuario(name, value) {
        console.log(name, value)
        try {
            const response = await api.put(`/users/${user_id}`,{[name]:value});
            setDadosUsuario(response.data);
            alert("Usuário alterado com sucesso")
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }



    useEffect( ()=>{
        getProdutosUsuario();
        getDadosUsuario();
    },[])

    

   
    
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
                                <button className='botaoeditar' onClick={() => {putDadosUsuario("name",dadosUsuario.name)}} >Editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder="" name="name" value={dadosUsuario.name} onChange={handleChange} />
                            </div>
                         </div>
                         <div className="column">
                            <div className="linha">
                                <h1 className="texto_formulario">Cidade: </h1>
                                <button className='botaoeditar' onClick={() => {putDadosUsuario("cidade",dadosUsuario.cidade)}} >Editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder="" name="cidade" value={dadosUsuario.cidade} onChange={handleChange}/>
                            </div>
                         </div>
                     </div>
                     <div className="line">
                        <div className="column">
                            <div className="linha">
                                <h1 className="texto_formulario">Endereço de email: </h1>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder="" name="email" value={dadosUsuario.email} />
                            </div>
                        </div>
                        <div className="column">
                            <div className="linha">
                                <h1 className="texto_formulario">Endereço: </h1>
                                <button className='botaoeditar' onClick={() => {putDadosUsuario("endereço",dadosUsuario.endereço)}}>Editar</button>
                            </div>
                            <div className="linha">
                                <Input className="campo_perfil" type="text" placeholder="" name="endereço" value={dadosUsuario.endereço} onChange={handleChange}/>
                            </div>
                        </div>
                     </div>
                     <div className="line">
                        <button onClick={logoutUser} className='botao_sair'>Sair da Conta</button>
                     </div>
                </div>
            </div>
            <Typography><h1 className="texto_perfil">Itens selecionados: </h1></Typography>
                 <div className="noteContainer_perfil">
                    {produtosUsuario.map((produto) => (
                        <div className="produto_perfil">
                            <Note key={produto.produto_id} produto={produto} props={botaoVisivel} />
                        </div>
                    ))}
                </div> 

            <img src="/images/logo2.png" alt="logofinal" className="logofinal"></img>
            
            
        </div>

    );
    
    
}

export default Perfil;