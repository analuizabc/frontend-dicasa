import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Heather from "./pages/Heather";
import { isAuthenticated } from "./services/auth";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
    {...rest}
    render={(props)=>
        isAuthenticated() ?(
            <Component {...props} />
        ) : (
            <Redirect
              to={{pathname: "/login", state: {from: props.location}}}
            />
        )
    }
    />
);

function Routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/" component={UserHeather}/>

          </Switch>
        </BrowserRouter>
    )
}

function UserHeather() {
    return (
            <Switch>
                <PrivateRoute path="/cardapio" component={Cardapio}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <PrivateRoute path="/perfil" component={Perfil}/>
                <Route component={()=><Redirect to ="/login"/>}/>
            </Switch>
    );
}
export default Routes;