import React, {Component} from 'react';
import '../assets/css/App.css';
import '../assets/css/portfolio.css';

class Secc1 extends Component{
    render(){

        let skills = [
            {
                lenguajes: "HTML5",
                de: "html"
            },
            {
                lenguajes: "CSS3",
                de: "css"
            },
            {
                lenguajes: "Bootstrap",
                de: "bootstrap"
            },
            {
                lenguajes: "JavaScript - JQuery",
                de: "javascript"
            },
            {
                lenguajes: "Java",
                de: "java"
            }
        ]

        return(
            <section className="secc-1 container secc-1-grid">
                <div className="skill"> 
                    <h2>Skills</h2>
                    {
                        skills.map((skills, i) =>{
                            // console.log(skills, i)
                            return(
                                <li>
                                    <h3>{skills.lenguajes}</h3>
                                    <span className="bar">
                                        <span className={skills.de}></span>
                                    </span>
                                </li>
                            )

                        })
                    }
                    
                </div>

                <div className="conocimientos container">
                    <h2>Conocimientos en:</h2>
                    
                    <div className="conocimientos-grid">
                        <ul>
                            <h3>Desarrollo web: </h3>
                            <li>Sass - Less</li>
                            <li>Conexión PHP + MySQL</li>
                            <li>GIT</li>
                            <li>Consola de Linux (básico)</li>
                            <li>Paquete Office</li>
                            <br/>
                        </ul>
                    
                        <ul>
                            <h3>Audiovisual </h3>
                            <li>Zara Radio - Dinesat</li>
                            <li>Reaper, ProTools, Audacity, SoundForge</li>
                            <li>Adobe Illustrator - Adobe Premiere Pro</li>
                            <li>Sibelius</li>
                            <li>Autocad</li>
                            <br/><br/>
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
}
 
export default Secc1;