import "./styles.css";
import Home from '../Home';
import Resource from '../Resource';
import Main from '../Main';
import Futer from '../Futer';

import { Link } from 'react-router-dom';

export default function Principal(){

    return(

        <div id="principal1">
            <header>
                <Home princ="principal"/>      
                <Resource/>
            </header>
            <Main/>
            <Link to="/Projects"><h3 id="h3git">Projetos</h3></Link>

            <Futer />


        </div>
    

    )
}