import { Input } from "@mui/material";
import React from "react";
import "./Cardapio.css"

function Cardapio() {
    return (
     <div className="cardapio">
        <img src="/images/Cardapio.png" alt="logocardapio" className="logocarda"></img>
        <Input type="text" placeholder=""></Input>
     </div>
    );
}

export default Cardapio;