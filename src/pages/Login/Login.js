import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./Login.css"


function Login() {
    return (
        <div className="base">
            <div className="container">
                <Link to="home">Home</Link>
                <h1>Login</h1>
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
                         Não tem login? Faça seu cadastro aqui
                    <div className="inputs">
                        <button>Acessar</button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;