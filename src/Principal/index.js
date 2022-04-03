import "./styles.css";
import Home from '../Home';
import Resource from '../Resource';
import Main from '../Main';
import Futer from '../Futer';
import conect from "../Image/conect.webp";
import logoPato from "../Image/logoPato.png";

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Principal(){

    useEffect(() => { 
        const handleMouseLeave = () => {
            
    
          Swal.fire({

            imageUrl: 'https://s2.glbimg.com/iOwtvljs0lUpC8MW1XKQ0uSu4LI=/e.glbimg.com/og/ed/f/original/2015/12/23/thinkstockphotos-487754974.jpg',
            //imageUrl: <div> <img  src={logoPato}  width={340} /> </div> ,

                       
            title: '<strong> <mark> Não perda tempo. </mark> <br> Conecte-se ao mundo. </strong>',
            imageAlt: 'A tall image',
            
            
          })
        }
    
         

        document.addEventListener('mouseleave', handleMouseLeave);
        
    
        // Professor como eu faço para o POPAP so abri a primeira vez que o usuario for fexar a pagina ????
        
      }, []);

      

    return(

        <div id="principal1">
            <header>
                <Home princ="principal"/>      
                <Resource/>
            </header>
            <Main/>
            <div id="paiProject">
            <Link to="/Projects" as="a" > <div id="irProject"> <h3 id="h3git">Projetos</h3> </div></Link>
            </div>

            <Futer />


        </div>
    

    )
}

//<img  id="caPato" src={paTop}  width={440} />