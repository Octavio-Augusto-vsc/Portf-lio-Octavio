import "./styles.css";

import { useEffect, useState } from 'react';
//import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

//import Home from '../Home';
import api from '../Services/api'
import Home from '../Home';
import Futer from '../Futer';
import Caroc from '../Carousel';


const Projects = () => {
    const [repository, setRepository] = useState({});
    const [Language, setLanguage] = useState([]);
    //const { repositoryOwner, repositoryName } = useParams();
    //const repoFullName = repositoryOwner;
  
    const [testL, setTestL] = useState([]);
    useEffect(() => {
      async function loadRepositoryData() {
        try {
          const response = await api.get(`/users/Octavio-Augusto-vsc`);
          setRepository(response.data);

          
        } catch (error) {
          Swal.fire({
            title: error.response.status,
            icon: 'error',
            text: error.response.data.message
          })
        }
      }
      loadRepositoryData();
    },[]);

    useEffect(() => {
        async function loadRepositoryLanguage() {
          try {
            const responseL = await api.get(`/users/Octavio-Augusto-vsc/repos`);
            setLanguage(responseL.data);

            if(Language.language !== testL.language){
              setTestL(Language)
            }
            
            //testL.preventDefault(testL);
            console.log(testL);

  
          } catch (error) {
            Swal.fire({
              title: error.response.status,
              icon: 'error',
              text: error.response.data.message
            })
          }
        }
        loadRepositoryLanguage();
      },[]);
  

    
    

    return (

      < >
        

        <Home rep={" Meus " + `${repository.public_repos}`}  proj="projeto" />


        <div id="mainProj">

          

          <h1 id="h1Proj"> {repository.name} </h1>  
        
          <div  id="contImag"> <img id="imgPro" src={repository.avatar_url}></img> </div>
          <h2>Total de projetos: {repository.public_repos}</h2>

        
        
          

          <ol className="item-list-projects" id="projetos">
            {Language.map((tudo) => {
              
             
              
              return <li style={{ border: "1px solid red", margin: "10px" }} key={tudo.language} > 

                        <h4> Nome do projeto: {tudo.name} </h4> 
                        <h4> Linguagem utilizada: {tudo.language} </h4> 
                        <a href={tudo.html_url} target="_blank" rel="noreferrer"> <h4 style={{ color: "red" }} > Link para GitHub. </h4> </a>
                      
                      </li>
            })}
          </ol>

          <h1>{testL.language}</h1>
               
        
          <Link to="/"><h3 id="h3git">Voltar a pagina principal.</h3></Link>
        </div>
       
        <div id="carocel">

            <Caroc />

        </div>

        <Caroc id="carocel" />
        
        <Futer />

      </>
    )
  }
  
  export default Projects;


                  //PROFESSOR
//PROFESSOR         
//Professor eu queria que ele so enprima na tela uma liguagem de programação de cada que eu uso.
//no caso que eu fiz es mostrando todos e esta do jeito serto. Mais so para eu saber como eu fasso para Java que neste caso tem DUAS so aparece uma VEZ.
// Na linha 104 tem um H1 que não esta fazendo nada ( se de pal e so apaga a linha 104)
//  NA LINHA 45  EU FIZ UMA CONDICIONAL QUE APARENTEMENTE ESTA SERTO MAIS EU NÃO TENHO SERTEZA (tipo aparece no console do navegador).
// mas tambem pode ser que falta um MAP na linha 104 ?  (para aparece uma linguagem de cada ou seria u filter)



