import React, {Component} from 'react';
import '../assets/css/App.css';
import '../assets/css/portfolio.css';


class Contacto extends Component{

    render(){
        let infocontacto = [
            {
                titulo: "Nombre",
                info: "Lilén Amado",
                paraclase: "fa fa-user icons-part displayblock"
            },
            {
                titulo: "Ciudad",
                info: "Buenos Aires, Argentina",
                paraclase: "fa fa-map-marker icons-part displayblock"
            },
            {
                titulo: "Email",
                info: "lilenanahiamado@gmail.com",
                paraclase: "fa fa-envelope icons-part displayblock"
            }
        ]
        let nombre = document.getElementById('nombre')
        let email = document.getElementById('email')
        let asunto = document.getElementById('asunto')
        let mensaje = document.getElementById('mensaje')
        let small_but = document.getElementById('small_but')
        let formulario = document.getElementById('formulario')


        function validarForm() {
            console.log('pasa')
            if (nombre.value === '' || nombre.value === null || email.value === '' || email.value === null || email.value.indexOf('@', 0) == -1 || asunto.value === '' || asunto.value === null || mensaje.value === '' || mensaje.val === null) {
                console.log(nombre.value)
                console.log(email.value)
                console.log(asunto.value)
                console.log(mensaje.value)
                small_but.innerText = 'Algún campo se encuentra vacío o es incorrecto';
                return false
            }else{
                //alert("Todos los campos correctos");
                formulario.submit();
                return true
            }
        }
        return(
            <section className="contacto">
                <h2>Contactame</h2>
                <article className="grid-contacto">
                    <div className="con-prueba">
                        <div className="iconos-contacto">

                        {
                        infocontacto.map((infocontacto, i) =>{
                            // console.log(infocontacto, i)
                            return(
                                <div className="grid-contacto2">
                                    <i className = {infocontacto.paraclase}></i>
                                    <div className="info">
                                        <div className="titulo-cont">{infocontacto.titulo}</div>
                                        <div className="subtitulo-cont">{infocontacto.info}</div>
                                    </div>
                                </div>
                            )

                            })
                        }
                    
                            
                            

                        </div>
                    </div>
                    
                    <form method="POST" name="contact" data-netlify="true" netlify className="container-con" id="formulario">
                        <input type="text" name="nombre" placeholder="Nombre" id="nombre" />
                        <input type="email" name="email" placeholder="Email" id="email" />
                        <br />
                        <input type="text" name="asunto" placeholder="Asunto" id="asunto" />
                        <br />
                        <textarea name="mensaje" placeholder="Mensaje" id="mensaje" className="fontS1rem"></textarea>
                        <br />
                        <input type="submit" value="Enviar" className="boton-contacto" id="boton_contacto" onclick="return validarForm()" /> 
                        <br />
                        <small id="small_but"></small>
                    </form>
                </article>
            </section>
        )
    }

    
}

export default Contacto;