import React from 'react'
import './Header.scss';

function Headers() {
  return (
    <div className="header">
      <div className="left">
            <div className="l-wrapper">
                <h2>HOLA, YO SOY</h2>
                <h1>IVÁN </h1>
                <h1>REYES</h1>
                <div className="title">
                    <div className="title-wrapper">
                        <div className="itemtitle">Front-End Dev</div>
                        <div className="itemtitle">Back-End Dev</div>
                        <div className="itemtitle">Proactivity</div>
                        <div className="itemtitle">Imagination</div>
                    </div>
                </div>
                <div className="description">
                Estoy comprometido en aumentar mis horizontes, mi conocimiento, ser proactivo y estar en constante aprendizaje para estar a la vanguardia de las tecnologias.
                </div>
        </div>

      </div>
      <div className="photo">
      </div>
    </div>

  )
}

export default Headers