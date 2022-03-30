import estudos from "../Estudos";
import Lista from "../Lista";
import "./styles.css";

export default function Main () {

    return (

        <main>
            
            {estudos.map((espert)=>(
                <Lista key={espert.id} intem={espert} />
                
               
            ))}
            
            
        </main>


    )
}