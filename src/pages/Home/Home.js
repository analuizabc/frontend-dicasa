import { Typography } from "@mui/material";
import React from "react";
import { Carousel, } from "react-bootstrap";
import "./Home.css"

function Home() {
    return (
     <>
    <div className="note">   
        <Carousel>
            <Carousel.Item>
                <img
                 src="/images/Component2.png" 
                 alt="fotohome" 
                 className="caracol1"    
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                 className="d-block w-100"
                 src="/images/carr.png"
                 alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                 className="d-block w-100"
                 src="/images/saladafoto1.png"
                 alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <div className="container">
        <div className="noteTitle"><Typography><h1 className="titulo">Quem somos</h1></Typography></div>
        <div className="noteDescription"><Typography><h1 className="texto">A ‘DiCasa’ Lanches Saudáveis surgiu com a proposta de levar saúde, sabor e qualidade, de maneira criativa e por meio de alimentos naturais e livres de conservantes. Somos uma cozinha especializada em alimentação saudável com foco em sanduíches naturais, saladas, sucos naturais, vitaminas, tapiocas e crepiocas. Todos os nossos produtos são inspirados em receitas caseiras e livres de aditivos como conservantes e temperos industriais. 
        </h1></Typography></div>
        <div className="noteTitle"><Typography><h1 className="titulo">Nossa história</h1></Typography></div>
        <div className="noteDescription"><Typography><h1 className="texto">Fundada em 2022, a ‘DiCasa’ é fruto da paixão da fundadora, Maria Júlia Pimenta, pela culinária e alimentação saudável. Ao se mudar e perceber que em sua nova cidade só havia restaurantes e lanchonetes especializadas em fast-food, Maria Pimenta sentiu a necessidade de criar um projeto em que qualidade, saúde e sabores caseiros e naturais fossem priorizados. 
        </h1></Typography></div>
        <div className="noteTitle"><Typography><h1 className="titulo">Nosso objetivo</h1></Typography></div>
        <div className="noteDescription"><Typography><h1 className="texto">Nosso objetivo é transformar a visão das pessoas sobre alimentação e culinária, unindo o saudável ao saboroso. Nosso foco é trazer receitas tradicionais, adicionando ao cardápio de inúmeras pessoas, refeições caseiras e naturais. Comer bem importa! 
        </h1></Typography></div>
        </div>
         <Typography><h6 className="linha">_________________________________________________________________________________________________________________________________</h6></Typography>
        <div className="baixo">   
            <Typography><h6 className="saudavel">SAUDAVEL</h6></Typography>
            <Typography><h6 className="saboroso">SABOROSO</h6></Typography>
            <Typography><h6 className="comida">COMIDA CASEIRA</h6></Typography>
        </div>
    </div>
     </>
    );
}

export default Home;