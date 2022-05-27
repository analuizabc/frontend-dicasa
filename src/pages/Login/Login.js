import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from"../../services/api"
import{login} from "../../services/auth"
import "./Login.css"


function Login() {
    const history=useHistory();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();

    async function handleLogin(e){
        e.preventDefault();
        try {
          const response= await api.post('/login',{email,password} );
          alert("Bem vindo");
          login(response.data.accessToken)
          window.location.href="\home";
        }catch(error){
        if(error.response.status===403){
            alert("Credenciais invalidas");
        }
        else{
            alert(error.response.data.notification);
        }
        console.warn(error)
        }
    }
    function cadastro(){
        history.push("cadastro");
    }
    return (
        <div className="fundo">
            <div className="base_login">
                <div className="Container">
                <h1 className="noteTitle_login">Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="texto">E-mail:</Form.Label>
                    <Form.Control className="caixa" type="email" placeholder="" onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="texto">Senha:</Form.Label>
                    <Form.Control type="password" placeholder="" onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                        <h2 className="texto2">Não tem login? Faça seu cadastro
                        <button onClick={cadastro} className='botaolink'> aqui</button>
                        </h2>
                        <div className="inputs">
                        <button onClick={handleLogin} className='botao_login'>Acessar</button>
                        </div>
                </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;