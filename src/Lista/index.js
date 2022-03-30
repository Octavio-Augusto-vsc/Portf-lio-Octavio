import "./styles.css";
export default function Lista (props) {
    const{ materia, foto} = props.intem;

    return (
        <div id="sobre" className="lista">
            
            {foto}
            <h3 style={{ border: "1px solid red" }}>{materia}</h3>
            
            
        </div>
    )

}
//target="_blank" rel="noreferrer"