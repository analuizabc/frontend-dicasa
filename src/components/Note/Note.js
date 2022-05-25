
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./Note.css";


function Note({ produto }) {

    const [produtosUsuario, setProdutosUsuario] = useState([])
    const [produtoSelecionado, setProdutoSelecionado] = useState(false)

    const user_id = "09f41a9b-54a5-4588-acdf-5f3227b632c8"
    async function getProdutosUsuario() {
        try {
            console.log(user_id);
            const response = await api.get(`/produtouser/${user_id}`);
            setProdutosUsuario(response.data);
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }

    async function verificandoSelecionado() {
        console.log(produtosUsuario)
         produtosUsuario.forEach((produtoUsuario)=>{
             if (produtoUsuario.produto_id === produto.produto_id ) {
                 setProdutoSelecionado(true)
             }
         }

        )
    }

    useEffect( ()=>{
        getProdutosUsuario();
    },[])

    useEffect( ()=>{
        verificandoSelecionado();
    },[produtosUsuario])

    return (<div className="Note">
        <img src={produto.imagem} alt="carda" className="produtos"></img>
        <div className="notetitle"><text className="nome">{produto.titulo}</text></div>
        <div className="notedescription"><text className="valor">{produto.valor}</text></div>
        {produtoSelecionado ? (
            <button className="buttonselecionado" id=""><h4 className="selecionar">Selecionado</h4></button>
        ) : (
            <button className="button" id=""><h4 className="selecionar">Selecionar</h4></button>
        )
        }
    </div>
    );
}



export default Note;
