import "./styles.css";
import logo from "../Image/logoPato.png";

import { Helmet } from 'react-helmet';


export default function Home ({ princ, proj }) {

    function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView();
    }

    return (

        <>

        
            <Helmet>
                
                <title>Bem vindo (a) </title>
            </Helmet>
        

        <header style={{ border: "1px solid red" }}>

            <div className="home" id="homeUnic">

                <img src={logo}  width={127}></img>


                

                {proj && (
                    <ul className="menu">
                        <li className="item-menu" onClick={() => scrollToComponent("projetos")}> Projetos </li>
                        <li className="item-menu" onClick={() => scrollToComponent("contatos")}> Contatos </li>
                        

                    </ul>
                )}



                {princ && (
                    <ul className="menu" id="unic">
                        <li className="item-menu" onClick={() => scrollToComponent("objetivo")}> Objetivo </li>
                        <li className="item-menu" onClick={() => scrollToComponent("sobre")}> Sobre </li>
                        <li className="item-menu" onClick={() => scrollToComponent("contatos")}> Contatos </li>
                    </ul>
                )}
                
                
                
            </div>
            

        </header>

        </>
    )

}