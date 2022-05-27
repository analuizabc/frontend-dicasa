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
import Footer from "./pages/Footer";


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
              <Route exact path="/home" component={Home}/>
              <Route exact path="/cardapio" component={Cardapio}/>
              <Route exact path="/cadastro" component={Cadastro}/>
              <Route exact path="/perfil" component={Perfil}/>
              <Route exact path="/login" component={Login}/>

          </Switch>
        </BrowserRouter>
    );
}

function UserHeather() {
    return (
        <Heather>
            <Switch>
                <PrivateRoute path="/cardapio" component={Cardapio}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <PrivateRoute path="/perfil" component={Perfil}/>
                <Route component={()=><Redirect to ="/login"/>}/>
            </Switch>
        </Heather>
    );
    
 }
 
function UserFooter() {
    return (
        <Footer>
            <Switch>
                <Route exact path="/cardapio" component={Cardapio}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route exact path="/perfil" component={Perfil}/>
            </Switch>
        </Footer>
    );
}
export default Routes;