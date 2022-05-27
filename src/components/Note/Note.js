
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./Note.css";


function Note({ produto, props }) {

    const [produtosUsuario, setProdutosUsuario] = useState([])
    const [produtoSelecionado, setProdutoSelecionado] = useState(false)
    const [produtoOficial, setProdutoOficial] = useState({})


    async function getProdutoPerfil(){
        if (!props) {
            try {
                const response = await api.get(`/produto/${produto.produto_id}`);
                setProdutoOficial(response.data)
            } catch (error) {
                console.warn(error);
                alert(error.message);
            }   
        }
        else{
            setProdutoOficial(produto)
        }
        
    }


    const user_id = "b5e44af6-d9af-4391-9dfd-8c49fc3bc0a0"
    async function getProdutosUsuario() {
        try {
            const response = await api.get(`/produtouser/${user_id}`);
            setProdutosUsuario(response.data);
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }

    async function verificandoSelecionado() {
         produtosUsuario.forEach((produtoUsuario)=>{
             if (produtoUsuario.produto_id === produto.produto_id ) {
                 setProdutoSelecionado(true)
             }
         }

        )
    }

   
    async function postProdutoUser() {
        const produto_id = produto.produto_id
        try {
            const response = await api.post(`/produtouser`,{
                user_id,
                produto_id
            });
            window.location.href="/cardapio"
            return response;
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }

    async function deleteProdutoUser() {
        const produto_id = produto.produto_id
        try {
            const response = await api.delete(`/produtouser/${produto_id}/${user_id}`);
            window.location.href="/cardapio"
            return response;
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }

    useEffect( ()=>{
        getProdutoPerfil();
        getProdutosUsuario();
    },[])

    useEffect( ()=>{
        verificandoSelecionado();
    },[produtosUsuario])

    return (<div className="Note">
        <img src={produtoOficial.imagem} alt="carda" className="produtos"></img>
        <div className="notetitle"><text className="nome">{produtoOficial.titulo}</text></div>
        <div className="notedescription"><text className="valor">{produtoOficial.valor}</text></div>
        {props ? ( 
            <>
            {produtoSelecionado ? (
            <button className="buttonselecionado" onClick={() => {deleteProdutoUser()}} id=""><h4 className="selecionar">Selecionado</h4></button>
        ) : (
            <button className="button" onClick={() => {postProdutoUser()}} id=""><h4 className="selecionar">Selecionar</h4></button>
        )
        }</>
        ) : ( 
            <></> 
        ) 
    } 
    </div>
    );
}



export default Note;
