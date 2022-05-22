import React from "react";
import Routes from "./routes";
import "./global.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Heather from "./pages/Heather";
import Footer from "./pages/Footer";
function App() {
  return (
  <>
    <Heather/>
      <Routes/>
    <Footer/>
  </>
);

}

export default App;
