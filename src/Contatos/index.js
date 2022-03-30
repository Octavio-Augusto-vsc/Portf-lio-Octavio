import "./styles.css";

import { ImInstagram, ImFacebook2, ImMail, ImTwitter, ImLinkedin } from "react-icons/im";

export default function Contatos(){

    return(

        
        <div className="contatosPrincipal">
            <div id="contatosDiv">

                <a href="https://www.facebook.com/profile.php?id=100079451590369" target="_blank" id="facebook">

                    <ImFacebook2 id="contatos" size={60} color="1876f2" />
                </a>

                <a href="https://www.instagram.com/octavio.augusto___/" target="_blank" >

                    <ImInstagram id="contatos" size={60} color="8a3db0" />
                </a>
                

                <a href="https://is.gd/Bf3S5r" target="_blank" >

                    
                <ImMail id="contatos" size={60} color="d4493a" />
                </a>


                <a href="https://twitter.com/Octavio27430125" target="_blank" >

                    
                    <ImTwitter id="contatos" size={60} color="1da0f1" />
                </a>


                <a href="https://www.linkedin.com/in/octavio-augusto-424460235/" target="_blank" >

                    
                    <ImLinkedin id="contatos" size={60} color="0a66c2" />
                </a>
                

            </div>
        </div>                      
    

    )
}
/*<a href="http://www.instagram.com.br">
        <FiInstagram size={60} color="purple" />
      </a>*///1da0f10a66c2