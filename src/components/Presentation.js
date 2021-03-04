import React, {Component} from 'react';
import '../assets/css/App.css';
import '../assets/css/portfolio.css';

// Importo imagenes 
import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'

class Presentation extends Component{
    render(){
        return(
            <div>
                <main className="banner-area" id="flecha">
                    <div className="banner-text">
                        <div className="titulo container">
                            <h1>Lilén Amado</h1>
                            <span className='desarrollo typed'></span>
                            <h2 className="displayNo">Desarrollo Web Front-End, Maquetación, Operación de Técnica de Radio</h2>
                            <p className="presentacion">
                                Mi nombre es Lilén Anahí Amado, tengo 24 años y soy de Buenos Aires, Argentina. <br />
                                En el 2020 me introduje en el universo de la programación
                                especializándome en el desarrollo web, iniciando mi formación en la
                                UTN y comencé a estudiar la Tecnicatura Universitaria en
                                Programación Informática en la Universidad Nacional de Quilmes;
                                complementando también con diversos cursos.
                                Por otro lado, estoy por recibirme de Operadora Técnica de Radio.
                                Busco un trabajo que me permita brindar y poner en práctica mi
                                conocimiento adquiriendo experiencia para seguir creciendo
                                profesionalmente.
                                Me encanta todo lo relacionado a lo audiovisual, el mundo IT y trabajar en equipo. 
                                En mi tiempo libre me apasiona tocar música. 
                            </p>

                            <a href="cv.pdf" target="_blank">
                                <input type="button" value="CV" className="boton_CV" id="boton_CV"/>
                                </a>

                            <a href="https://www.linkedin.com/in/lilenamado/" target="_blank">
                                <img src={linkedin} alt="" className="boton_linkedin"/>
                            </a>
                            <a href="https://github.com/LilenAmado" target="_blank">
                                <img src={github} alt="" className="boton_github"  id="skills"/>
                            </a>
                            
                        </div>
                    </div>
                    <br />
                </main>
            </div>
        )
    }

}
 
export default Presentation;