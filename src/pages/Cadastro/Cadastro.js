import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Cadastro.css"

function Cadastro() {
    const[nomedeusuario, setNomeDeUsuario] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();   
    const[confirmarsenha, setPasswordConf] = useState();
    const[cidade, setCidade] = useState();
    const[endereço, setEndereço] = useState();

    const history=useHistory();

    function cadastro(){
        history.push("Login");
        alert("Cadastro realizado com sucesso.");
        
    }
    return ( 
        <div className="base">
            <div className="containerCadastro">
                <div>
                    <h1 className="nomeTitulo">Cadastre-se</h1>
                </div>
                    <Form className="formCadastro"> 
                        
                            <Form.Group className="campoFormulario" controlId="formBasicNomeDeUsuario">
                            <Form.Label className="campoLabel">Nome de usuário:</Form.Label>
                            <Form.Control className="campoCaixa" type="text" placeholder="" 
                            onChange={(e)=>setNomeDeUsuario(e.target.value)} />
                            <Form.Text className="textCampo">
                            </Form.Text>
                            </Form.Group>
                        

                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicEmail">
                            <Form.Label className="campoLabel">Endereço de e-mail:</Form.Label>
                            <Form.Control className="campoCaixa" type="email" placeholder="" 
                            onChange={(e)=>setEmail(e.target.value)} />
                            <Form.Text className="textCampo">
                            </Form.Text>
                            </Form.Group>
                        </div>  

                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicPassword">
                            <Form.Label className="campoLabel">Senha:</Form.Label>
                            <Form.Control className="campoCaixa" type="password" placeholder=""
                            onChange={(e)=>setPassword(e.target.value)} />
                            </Form.Group>
                        </div> 

                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicPasswordConf">
                            <Form.Label className="campoLabel">Confirmar senha:</Form.Label>
                            <Form.Control className="campoCaixa" type="password" placeholder="" 
                             onChange={(e)=>setPasswordConf(e.target.value)} />
                            </Form.Group>
                        </div> 

                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicCidade">
                            <Form.Label className="campoLabel">Cidade:</Form.Label>
                            <Form.Control className="campoCaixa" type="text" placeholder="" 
                             onChange={(e)=>setCidade(e.target.value)} />
                            <Form.Text className="textCampo">
                            </Form.Text>
                            </Form.Group>
                        </div>    

                        <div>
                            <Form.Group className="campoFormulario" controlId="formBasicEndereço">
                            <Form.Label className="campoLabel">Endereço:</Form.Label>
                            <Form.Control className="campoCaixa" type="text" placeholder="" 
                             onChange={(e)=>setEndereço(e.target.value)} />
                            <Form.Text className="textCampo">
                            </Form.Text>
                            </Form.Group>
                        </div>    


                        <div>
                            <button onClick={cadastro} className="botao">Cadastre-se</button>  
                        </div>

                    </Form>
             </div>
         </div>
    );
}

export default Cadastro;

