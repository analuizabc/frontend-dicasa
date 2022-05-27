import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./Cardapio.css";
import Note from "../../components/Note";


function Cardapio() {

    const [botaoVisivel]=useState(true);
    const [produtos, setProdutos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


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
        <Input type="text" onChange={(event) => { setSearchTerm(event.target.value); }} className="barra"></Input>
       
        <div className="noteContainer">
            {produtos.filter((val)=> {
                if (searchTerm === "") {
                    return val
                } else if (val.titulo.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }}).map((produto) => (
            <Note key={produto.produto_id} produto={produto} props={botaoVisivel} />
            ))}
        </div>
        <img src="/images/logo2.png" alt="logofinal" className="logofinal"></img>
     </div>

    );
}

export default Cardapio;