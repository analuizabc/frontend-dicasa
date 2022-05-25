
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./Note.css";


function Note({ produto, props }) {

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
        getProdutosUsuario();
    },[])

    useEffect( ()=>{
        verificandoSelecionado();
    },[produtosUsuario])

    return (<div className="Note">
        <img src={produto.imagem} alt="carda" className="produtos"></img>
        <div className="notetitle"><text className="nome">{produto.titulo}</text></div>
        <div className="notedescription"><text className="valor">{produto.valor}</text></div>
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
