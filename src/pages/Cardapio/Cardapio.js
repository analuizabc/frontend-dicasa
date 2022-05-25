import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./Cardapio.css";
import Note from "../../components/Note";


function Cardapio() {

    const [botaoVisivel, setBotaoVisivel]=useState(true);
    const [produtos, setProdutos] = useState([])


    function test() {
        console.log(produtos)
    }

    async function getProdutos() {
        try {
            const response = await api.get(`/produtosget`);
            setProdutos(response.data);
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }

    useEffect( ()=>{
        getProdutos();
    },[])

    

    return (
     <div className="cardapio">
        <img src="/images/Cardapio.png" alt="logocardapio" className="logocarda"></img>
        <Input type="text"  className="barra"></Input>
       
        <div className="noteContainer">
            {produtos.map((produto) => (
            <Note key={produto.produto_id} produto={produto} props={botaoVisivel} />
            ))}
        </div>
        <img src="/images/logo2.png" alt="logofinal" className="logofinal"></img>
        <button style={{color:"green"}} onClick={()=>test()}><h4>MARIA</h4></button>
     </div>

    );
}

export default Cardapio;