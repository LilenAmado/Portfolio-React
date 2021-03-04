import React, {Component} from 'react';
import '../assets/css/App.css';
import '../assets/css/portfolio.css';


class Secc3 extends Component{
    render(){
        let titulos = ['Cursos','Formacion universitaria','Formacion terciaria']
        let education1 = [
            {
                anio: '2020 - 2020',
                universidad: 'Universidad Tecnológica Nacional (UTN)',
                carrera: 'Professional WebMaster',
                especializacion: 'Frontend'
            },
            {
                anio: '2020 - 2020',
                universidad: 'Polo TIC Misiones',
                carrera: 'Desarrollo Web PHP Full-Stack Junior',
                especializacion: 'FullStack'
            },
            {
                anio: '2020 - 2021',
                universidad: 'Digitalers (Telecom - Educación IT)',
                carrera: 'Diseño UX/UI (en curso)',
                especializacion: 'Diseño UX/UI'
            }]

            let education2 = [{
                anio: '2020 - en curso',
                universidad: 'Universidad Nacional de Quilmes',
                carrera: 'Tecnicatura en Programación Informática (en curso)',
                especializacion: 'Programación'
            }]

            let education3 = [
            {
                anio: '2018 - en curso',
                universidad: 'Escuela Terciaria de Educación Radiofónica (ETER)',
                carrera: 'Operador Técnico y editor para Radio (en curso)',
                especializacion: 'Operación Técnica de Radio (Matrícula Otorgada por ISER)'
            },
            {
                anio: '2015 - 2018',
                universidad: 'Instituto de Formación Docente de Altos Estudios Esteban Adrogué',
                carrera: 'Titulo de Formación Pedagógica para Profesionales, Técnicos Sup. y Técnicos de Nivel Medio',
                especializacion: 'Docencia'
            }]
            
        return(
            <section class="section">
                <article class="education container">

                    <h3 class="titulos-educ">{titulos[0]}</h3>
                    {
                        education1.map((education1, i) =>{
                            return(
                                <div className="education__container">
                                    <div className="education__content">
                                        <div>
                                            <h4 className="education__year">{education1.anio}</h4>
                                            <span className="education__university">{education1.universidad}</span>
                                        </div>
                                        <div className="education__time">
                                            <span className="education__rounder"></span>
                                            <span className="education__line"></span>
                                        </div>
                                        <div>
                                            <h4 className="education__race">{education1.carrera}</h4>
                                            <span className="education__specialty">{education1.especializacion}</span>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                            )
                        })
                    } 

                    <h3 class="titulos-educ">{titulos[1]}</h3>
                    {
                        education2.map((education2, i) =>{
                            return(
                                <div className="education__container">
                                    <div className="education__content">
                                        <div>
                                            <h4 className="education__year">{education2.anio}</h4>
                                            <span className="education__university">{education2.universidad}</span>
                                        </div>
                                        <div className="education__time">
                                            <span className="education__rounder"></span>
                                            <span className="education__line"></span>
                                        </div>
                                        <div>
                                            <h4 className="education__race">{education2.carrera}</h4>
                                            <span className="education__specialty">{education2.especializacion}</span>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                            )
                        })
                    } 

                    <h3 class="titulos-educ">{titulos[2]}</h3>
                    {
                        education3.map((education3, i) =>{
                            return(
                                <div className="education__container">
                                    <div className="education__content">
                                        <div>
                                            <h4 className="education__year">{education3.anio}</h4>
                                            <span className="education__university">{education3.universidad}</span>
                                        </div>
                                        <div className="education__time">
                                            <span className="education__rounder"></span>
                                            <span className="education__line"></span>
                                        </div>
                                        <div>
                                            <h4 className="education__race">{education3.carrera}</h4>
                                            <span className="education__specialty">{education3.especializacion}</span>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                            )
                        })
                    } 
                    <br/><br/>
                    
                </article>
            </section>
        )
    }
}
 
export default Secc3;