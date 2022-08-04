import React from 'react'
import './Capacities.scss'
import cssicon from '../../img/icons/css.png'
import htmlicon from '../../img/icons/html-5.png'
import jsicon from '../../img/icons/javascript.png'
import nodeicon from '../../img/icons/nodejs.png'
import postgreicon from '../../img/icons/postgre.png'
import reacticon from '../../img/icons/react.png'
import reduxicon from '../../img/icons/redux.png'
import backicon from '../../img/icons/back.png'
import fronticon from '../../img/icons/front.png'
import sqlicon from '../../img/icons/sql.png'
import habilidadicon from '../../img/icons/habilidades.png'
import sassicon from '../../img/icons/sass.png'
import Projects from '../projects/Projects'


function capacities() {
  return (
    <div className="hola">

      <div className="container">

        <div className="card">
          <div className="top">
            <img src={habilidadicon} alt="" />
            <p>Habilidades generales</p>
            <hr />
          </div>

          <div className="center">
            <p>Entre mis habilidades generales poseo conocimientos en JavaScript, HTML y CSS.</p>
          </div>

          <div className="feet">
            <img src={cssicon} alt="" />
            <img src={htmlicon} alt="" />
            <img src={jsicon} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="top">
            <img src={fronticon} alt="" />
            <p>Front End</p>
            <hr />
          </div>

          <div className="center">
            <p>Soy un apasionado por el Desarrollo Front-End, entre mis habilidades estan tecnologias como React, Redux, Sass, Material UI y otras más. </p>
          </div>

          <div className="feet">
            <img src={reacticon} alt="" />
            <img src={reduxicon} alt="" />
            <img src={sassicon} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="top">
            <img src={backicon} alt="" />
            <p>Back End</p>
            <hr />
          </div>

          <div className="center">
            <p> Para el Desarrollo Back-End tengo conocimientos en el manejo de Node.JS, NextJS, ExpressJS, Sequelize y PostgreSQL </p>
          </div>

          <div className="feet">
            <img src={sqlicon} alt="" />
            <img src={nodeicon} alt="" />
            <img src={postgreicon} alt="" />
          </div>
        </div>

      </div>
      <hr />

      <div className="about">
        <h1 > CONÓCEME </h1>
        <h3 >TENGO UN POTENCIAL ENORME.</h3>
        {/* <hr /> */}
        <h2> Hola, mi nombre es Iván y soy originario de Colombia. Soy un apasionado por el Desarrollo Web, me encanta forjar ideas propias o participar en las propuestas de otras personas, darle vida a las ideas y plasmarlas es lo que más disfruto hacer.
        </h2>
        <h2>
          Entre mis habilidades blandas destaco por mi gran nivel comunicativo, empatía, dedicación, organización y trabajo en equipo. Actualmente estoy en busca de mi primer trabajo en la industria del desarrollo, un sitio donde pueda sumar y seguir creciendo como profesional.
        </h2>

        <h2>
          Abajo podrás encontrar mis redes para continuar en contacto.  🙂
        </h2>
      </div>

      <div className="projects">
      <h1 className='h1-title'> MI TRABAJO </h1>
        <h3 className='h3-title'>EVIDENCIA MI CRECIMIENTO</h3>
        <Projects />
      </div>


    </div>
  )
}

export default capacities