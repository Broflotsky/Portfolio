import './Carousel.scss'
import Slider from "react-slick";
import foodproject from '../../img/projects/food.jpg'
import gamesproject from '../../img/projects/games.jpg'
import weather from '../../img/projects/weather.jpg'
import githubicon from '../../img/icons/github.png'


function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="card-project" style={{ backgroundImage: "url(" + foodproject + ")"}}>
                        <div className='wrapper-repository'>
                        <img className='giticon' src={githubicon} alt="" />
                        <a href="https://github.com/Broflotsky/PIFOODCOM" target="_blank" className='repository'><span >Ir al repositorio</span></a>
                        </div>
                    <div className='wrapper-text'>
                        <h1>Proyecto Alimentos</h1>
                        <h3>React, Redux, NodeJS, Sequalize y PostgreSQL</h3>
                        <p>Visualización de recetas de comida, todo por consumo de API, ademas tiene funciones como filtrar de varias maneras, buscar y crear tu propia receta.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="card-project" style={{ backgroundImage: "url(" + gamesproject + ")" }}>
                <div className='wrapper-repository'>
                        <img className='giticon' src={githubicon} alt="" />
                        <a href="https://github.com/Broflotsky/PIGAMES" className='repository' target="_blank"><span >Ir al repositorio</span></a>
                        </div>
                    <div className='wrapper-text'>
                        <h1>Proyecto Videojuegos</h1>
                        <h3>React, Redux, NodeJS, Sequalize y PostgreSQL</h3>
                        <p>Visualización de videojuegos, todo por consumo de API, ademas tiene funciones como filtrar de varias maneras, buscar y crear tu propio videojuego.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="card-project" style={{ backgroundImage: "url(" + weather + ")" }}>
                <div className='wrapper-repository'>
                        <img className='giticon' src={githubicon} alt="" />
                        <a href="https://github.com/Broflotsky/WeatherApp" className='repository' target="_blank"><span >Ir al repositorio</span></a>
                        </div>
                    <div className='wrapper-text'>
                        <h1>Proyecto Clima</h1>
                        <h3>React y NodeJS</h3>
                        <p> Permite mirar temperatura actual, minima y maxima del dia, ademas la condición del clima en tiempo real de las ciudades que desees, información consumida de API.</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Carousel