import "./sty.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import paTop from "../Image/paTop.png";

import administracao from "../Image/administracao.jpg";
import dataSC from "../Image/dataSC.jpg";
import site from "../Image/site.jpg";
import marketing from "../Image/marketing.png";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
  }

function Caroc (){
  

return(
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  Carrossel  modeCenter = { true } 
  
  
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div id="carousel-1" className="carouselTodos"> <a href="https://habitatcoworking.com.br/seja-um-pato/" target="_blank" rel="noreferrer" > <img  id="caPato" src={paTop}  width={440} /> </a> </div>
  <div id="carousel-2" className="carouselTodos"> <a href="https://www.uninter.com/" target="_blank" rel="noreferrer" > <img  id="caPato" src={administracao} width={440} /> </a> </div>
  <div id="carousel-3" className="carouselTodos"> <a href="https://cursos.alura.com.br/analista-de-dados-stefan-dilenon-1619893527292-p151402" target="_blank" rel="noreferrer"> <img  id="caPato" src={dataSC} width={440} /> </a></div>
  <div id="carousel-4" className="carouselTodos">   <a href="https://www.digitalhouse.com/br/produtos/programacao/certified-tech-developer" target="_blank" rel="noreferrer" > <img  id="caPato" src={site} width={440} /> </a> </div>
  <div id="carousel-5" className="carouselTodos"> <a href="https://www.uninter.com/" target="_blank" rel="noreferrer" > <img  id="caPato" src={marketing} width={440} /> </a> </div>
</Carousel>
)}
export default Caroc;