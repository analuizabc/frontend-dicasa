import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.css"


function Login() {
    const history=useHistory();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();

    function login(){
        history.push("home");
    }

    return (
        <div className="fundo">
            <div className="base">
                <div className="container">
                 <h1 className="noteTitle">Login</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="texto">Email:</Form.Label>
                         <Form.Control 
                         type="email" 
                         placeholder="" 
                         onChange={(e)=>setEmail(e.target.value)}
                         />
                         <Form.Text className="text-muted">
                         </Form.Text>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label className="texto">Senha:</Form.Label>
                         <Form.Control 
                         type="password" 
                         placeholder="" 
                         onChange={(e)=>setPassword(e.target.value)} 
                            />
                        </Form.Group>
                             Não tem login? Faça seu cadastro aqui
                        <div className="inputs">
                            <button onClick={login}>Acessar</button>
                        </div>
                 </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;