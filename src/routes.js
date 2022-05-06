import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Heather from "./pages/Heather";

function Routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/cadastro" component={Cadastro}/>
              <Route path="/cardapio" component={Cardapio}/>
              <Route path="/home" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/perfil" component={Perfil}/>
              <Route path="/temp" component={Heather}/>
          </Switch>
        </BrowserRouter>
    )
}

export default Routes;