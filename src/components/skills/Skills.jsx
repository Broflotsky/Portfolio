import cssicon from '../../img/icons/css.png'
import htmlicon from '../../img/icons/html-5.png'
import jsicon from '../../img/icons/javascript.png'
import nodeicon from '../../img/icons/nodejs.png'
import postgreicon from '../../img/icons/postgre.png'
import reacticon from '../../img/icons/react.png'
import reduxicon from '../../img/icons/redux.png'
import sqlicon from '../../img/icons/sql.png'
import sassicon from '../../img/icons/sass.png'


export default function Skills(){
return(
        <div className="container">
            <h1>Estan son algunas de mis habilidades tecnicas</h1>
            <hr />
            <div className="icons">
                <img src={jsicon} alt="icon" />             
                <img src={cssicon} alt="icon" />
                <img src={htmlicon} alt="icon" />
                <img src={reacticon} alt="icon" />
                <img src={reduxicon} alt="icon" />
                <img src={sassicon} alt="icon" />
                <img src={nodeicon} alt="icon" />
                <img src={sqlicon} alt="icon" />
                <img src={postgreicon} alt="icon" />
            </div>
        </div>
    )
}


