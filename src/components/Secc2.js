import React, {Component} from 'react';
import '../assets/css/App.css';
import '../assets/css/portfolio.css';

class Secc2 extends Component{
    render(){

        let megusta = [
            {
                icono: "fa fa-paint-brush icons",
                texto: "Diseño Web"
            },
            {
                icono: "fa fa-code icons",
                texto: "Desarrollo"
            },
            {
                icono: "fa fa-users icons",
                texto: "Trabajo en Equipo"
            }
        ]

        return(
            <section className="secc-2">
                <div className="container">
                    <h2 className="titulo-secc-2">Me gusta</h2>
                    <div className="contenedor-cards">

                    {
                        megusta.map((megusta, i) =>{
                            // console.log(megusta, i)
                            return(
                                <div className="card">
                                    <div className="box">
                                        <i className={megusta.icono}></i> <br/><br/>
                                        <div className="text">{megusta.texto}</div>
                                    </div>
                                </div>
                            )

                        })
                    }  
                    </div>
                </div>
            </section>
        )
    }
}
 
export default Secc2;