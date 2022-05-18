import React from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.css"


function Login() {
    const history=useHistory();
    return (
        <div className="fundo">
            <div className="base_login">
                <div className="Container">
                <h1 className="noteTitle_login">Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                        <h2 className="texto2">Não tem login? Faça seu cadastro
                        <button onClick={cadastro} className='botaolink'> aqui</button>
                        </h2>
                        <div className="inputs">
                        <button onClick={login} className='botao_login'>Acessar</button>
                        </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;