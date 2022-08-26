import './Projects.scss'
import foodproject from '../../img/projects/food.jpg'
import gamesproject from '../../img/projects/games.jpg'
import weather from '../../img/projects/weather.jpg'
import Slider from "react-slick";

function Projects() {
return(
    <div className="project-container">
     
      <div className="card-project" style={{ backgroundImage: "url(" + foodproject + ")" }}>
        <div className='wrapper-text'>
          <h1>Proyecto Alimentos</h1>
          <h3>React, Redux, NodeJS, Sequalize y PostgreSQL</h3>
          <p>Visualización de recetas de comida, todo por consumo de API, ademas tiene funciones como filtrar de varias maneras, buscar y crear tu propia receta.</p>
        </div>
      </div>

      <div className="card-project" style={{ backgroundImage: "url(" + gamesproject + ")" }}>
        <div className='wrapper-text'>
          <h1>Proyecto Videojuegos</h1>
          <h3>React, Redux, NodeJS, Sequalize y PostgreSQL</h3>
          <p>Visualización de videojuegos, todo por consumo de API, ademas tiene funciones como filtrar de varias maneras, buscar y crear tu propio videojuego.</p>
        </div>
      </div>

      <div className="card-project" style={{ backgroundImage: "url(" + weather + ")" }}>
        <div className='wrapper-text'>
          <h1>Proyecto Clima</h1>
          <h3>React y NodeJS</h3>
          <p> Permite mirar temperatura actual, minima y maxima del dia, ademas la condición del clima en tiempo real de las ciudades que desees, información consumida de API.</p>
        </div>
      </div>

    </div>
  )
}

export default Projects