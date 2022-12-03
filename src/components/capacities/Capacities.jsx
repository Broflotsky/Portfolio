import './Capacities.scss'
import Skills from '../skills/Skills'
import Carousel from '../carousel/Carousel'
import naturaleza from '../../img/naturaleza.jpg'
import CV from '../../img/Ivan_Reyes_CV.pdf'
import Footer from '../footer/Footer'


function Capacities() {
  return (
    <>
      <Skills /> 
      <div className="about" data-aos="fade-rigth">
        <h1 > CONÓCEME, </h1>
        <h3 >TENGO UN POTENCIAL ENORME.</h3>
        <hr />
        <div className="divisor">
          <img src={naturaleza} alt="" />
          <div className="text-about">
          <h2>
            Mi nombre es Iván, tengo 25 años y soy un Web developer full stack de Medellin, Colombia.
          </h2>
          <h2>
          Apasionado por los autos, la natuzaleza, la programación, y la solución de problemas. Me encanta poder participar en el proceso de creación de proyectos, disfruto de trabajar en equipo y soy altamente proactivo.
          </h2>
          <h2>
            Estudié en el bootcamp de soyHenry desarrollo web full stack, adicional a esto tengo estudios en Finanzas de la Universidad EAFIT.
          </h2>

          <a className='download-cv' href={CV} download="IVAN_REYES_CV.pdf"><span>DESCARGAR CV</span></a>
          </div>
 
        </div>
      </div>

      <div className="projects" data-aos="fade-rigth">
        <h1 className='h1-title'> PROYECTOS, </h1>
        <h3 className='h3-title'>EVIDENCIA MI CRECIMIENTO</h3>
        <hr />
        <Carousel />
      </div>

      <div className="footer">
        <Footer />
      </div>

    </>
  )
}

export default Capacities