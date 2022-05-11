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
              <Route path="/" component={UserHeather}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/cardapio" component={Cardapio}/>
              <Route exact path="/cadastro" component={Cadastro}/>
              <Route exact path="/perfil" component={Perfil}/>
              <Route exact path="/login" component={Login}/>

          </Switch>
        </BrowserRouter>
    )
}

function UserHeather() {
    return (
        <Heather>
            <Switch>
                <Route exact path="/cardapio" component={Cardapio}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </Heather>
    );
}

export default Routes;