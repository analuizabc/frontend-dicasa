import { Input } from "@mui/material";
import React from "react";
import "./Cardapio.css"
import Note from "../../components/Note";


const notes = [
    {
        id: 1,
        src:"/images/Rectangle61.png",
        title: "Combo Sanduíche + Suco",
        description: "R$20,00",
        
    },
    {
        id: 2,
        src:"/images/Rectangle62.png",
        title: "Tapioca",
        description: "R$10,00",
    },
    {
        id: 3,
        src:"/images/Rectangle63.png",
        title: "Crepioca",
        description: "R$12,00",
    },
    {
        id: 4,
        src:"/images/Rectangle64.png",
        title: "Pastel Assado",
        description: "R$9,00",
    },
    {
        id: 5,
        src:"/images/Rectangle65.png",
        title: "Sanduíche Natural",
        description: "R$15,00",
    },
    {
        id: 6,
        src:"/images/Rectangle66.png",
        title: "Salada de Frutas",
        description: "R$10,00",
    },
    {
        id: 7,
        src:"/images/Rectangle67.png",
        title: "Salada Caesar",
        description: "R$15,00",
    },
    {
        id: 8,
        src:"/images/Rectangle68.png",
        title: "Saalada Tropical",
        description: "R$12,00",
    },
    {
        id: 9,
        src:"/images/Rectangle69.png",
        title: "Omelete",
        description: "13,50",
    },
    {
        id: 10,
        src:"/images/Rectangle70.png",
        title: "Suco Verde",
        description: "R$8,00",
    },
    {
        id: 11,
        src:"/images/Rectangle71.png",
        title: "Suco Natural",
        description: "R$6,00",
    },
    {
        id: 12,
        src:"/images/Rectangle72.png",
        title: "Vitamina",
        description: "R$9,00",
    },
]

function Cardapio() {
    return (
     <div className="cardapio">
        <img src="/images/Cardapio.png" alt="logocardapio" className="logocarda"></img>
        <Input type="text" placeholder=""></Input>

        <div className="noteContainer">
            {notes.map((note) => (
            <Note key={note.id} note={note} />
            ))}

        </div>
     </div>

    );
}

export default Cardapio;