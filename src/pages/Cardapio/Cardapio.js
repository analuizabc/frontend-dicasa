import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./Cardapio.css";
import Note from "../../components/Note";



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

function Cardapio() {

    const [produtos, setProdutos] = useState([])


    function test() {
        console.log(produtos)
    }

    async function getProdutos() {
        try {
            const response = await api.get(`/produtosget`);
            setProdutos(response.data);
            console.log(response.data);
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
            <Note key={produto.produto_id} produto={produto} />
            ))}

        </div>
        <img src="/images/logo2.png" alt="logofinal" className="logofinal"></img>
        <button onClick={()=>test()}><h4>test</h4></button>
     </div>

    );
}

export default Cardapio;