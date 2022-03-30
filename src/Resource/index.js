import "./styles.css";

import paTop from "../Image/paTop.png";


export default function Resource() {
    return (
      <div id="objetivo" className="imaPato"> 
        
         <h1 className=".textMain">Objetivo ser um pato</h1>
         <h3 className=".textMain">Pelo o motivo que os patos sabem um pouco de muita coisa ao mesmo tempo que não sabem de nada.</h3>
         <p>Para concluir o meu objetivo já estou na metade do caminho.</p>
         <p>Pois já não sei nada. Com isto só esta faltando eu saber um pouco de algumas coisas.</p>

         <img id="oPato" src={paTop}  width={440} color="purple" ></img>
        
      </div>
    );
  }