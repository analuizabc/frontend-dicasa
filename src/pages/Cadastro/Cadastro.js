import React from "react";
import { Form, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Cadastro.css"

function Cadastro() {
    const history=useHistory();
    return ( 
        <div className="base">
            <div className="container">
            <h1>Cadastre-se</h1>
                <Form> 
                             
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Endereço de E-mail</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control type="password" placeholder="" />
                        </Form.Group>


                        <button>Cadastre-se</button>
                <div className="inputs">
                          
                    </div>
                </Form>
             </div>
         </div>
    );
}

export default Cadastro;

