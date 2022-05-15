import React from "react";
import { Form, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Cadastro.css"

function Cadastro() {
    const history=useHistory();
    return ( 
        <div className="base">
            <div className="containerCadastro">
                <div>
                    <h1>Cadastre-se</h1>
                </div>
                <div>
                    <Form> 
                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicNomeDeUsuario">
                            <Form.Label className="campoLabel">Nome de usuário:</Form.Label>
                            <Form.Control className="campoCaixa"type="text" placeholder="" />
                            <Form.Text className="textCampo">
                            </Form.Text>
                            </Form.Group>
                        </div>    
                        
                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicEmail">
                            <Form.Label className="campoLabel">Endereço de E-mail:</Form.Label>
                            <Form.Control className="campoCaixa" type="email" placeholder="" />
                            <Form.Text className="textCampo">
                            </Form.Text>
                            </Form.Group>
                        </div>  

                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicPassword">
                            <Form.Label className="campoLabel">Senha:</Form.Label>
                            <Form.Control className="campoCaixa" type="password" placeholder="" />
                            </Form.Group>
                        </div> 

                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicPassword">
                            <Form.Label className="campoLabel">Confirmar senha:</Form.Label>
                            <Form.Control className="campoCaixa" type="password" placeholder="" />
                            </Form.Group>
                        </div> 

                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicCidade">
                            <Form.Label className="campoLabel">Cidade:</Form.Label>
                            <Form.Control className="campoCaixa"type="text" placeholder="" />
                            <Form.Text className="textCampo">
                            </Form.Text>
                            </Form.Group>
                        </div>    

                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicEndereço">
                            <Form.Label className="campoLabel">Endereço:</Form.Label>
                            <Form.Control className="campoCaixa"type="text" placeholder="" />
                            <Form.Text className="textCampo">
                            </Form.Text>
                            </Form.Group>
                        </div>    


                        <div className="botão">
                            <button>Cadastre-se</button>  
                        </div>

                    </Form>
                </div>
             </div>
         </div>
    );
}

export default Cadastro;

