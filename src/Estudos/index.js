import administracao from "../Image/administracao.jpg";
import dataSC from "../Image/dataSC.jpg";
import site from "../Image/site.jpg";
import marketing from "../Image/marketing.png";

const estudos = [
    {
        id: "1",
        materia: <a href="https://www.uninter.com/" target="_blank" rel="noreferrer"> <div>Uninter = </div> marketing </a>,
        foto: <img src={marketing} width={280} />
    },
    {
        id: "2",
        materia: <a href="https://www.uninter.com/" target="_blank" rel="noreferrer"> <div>Uninter =</div> administração </a>,
        foto: <img src={administracao} width={280} />
    },

    {
        id: "3",
        materia: <a href="https://cursos.alura.com.br/analista-de-dados-stefan-dilenon-1619893527292-p151402" target="_blank" rel="noreferrer"> <div>Alura =</div> analise de dados </a>,
        foto: <img src={dataSC} width={280} />
    },

    {
        id: "4",
        materia: <a href="https://www.digitalhouse.com/br/produtos/programacao/certified-tech-developer" target="_blank" rel="noreferrer"> <div>Digital house =</div> criar sites </a>,
        foto: <img src={site} width={280} />
    }
];

export default estudos;

