import React from 'react';
import '../assets/css/App.css';

// Importo imagenes 
import img1 from '../assets/img/portfolio1.png'
import img2 from '../assets/img/portfolio2.png'
import img3 from '../assets/img/portfolio3.png'
import img4 from '../assets/img/portfolio4.png'
import img5 from '../assets/img/portfolio5.png'
import img6 from '../assets/img/portfolio6.png'
import img7 from '../assets/img/portfolio7.png'
import img8 from '../assets/img/portfolio8.png'
import img9 from '../assets/img/portfolio9.png'

function Desarrollo() {

    let bucle = [
        {
            link:"http://mogabe.netlify.app/",
            img: img1,
            small: "Maqueta para banda musical"
        },{
            link: "http://cursos-desarrolloweb.netlify.app/",
            img: img2,
            small: "Maquetación con animaciones"
        },{
            link:"http://cafeenproceso.netlify.app/",
            img: img3,
            small: "Blog cafe - En proceso..."
        },{
            link: "http://blognaturaleza.netlify.app/index.html",
            img: img4,
            small: "Blog Naturaleza"
        },{
            link: "http://ecommerce-variete.netlify.app/",
            img: img5,
            small: "eCommerce - En proceso..."
        },{
            link: "http://inmueblesbr.netlify.app",
            img: img6,
            small: "Sitio Bienes Raices"
        },{
            link: "http://catarsis97.epizy.com/",
            img: img7,
            small: "Sitio para banda musical"
        },{
            link: "http://calculadora-simulacro.netlify.app",
            img: img8,
            small: "Primera Calculadora"
        },{
            link: "http://form-simulacro.netlify.app/",
            img: img9,
            small: "Simulacro de formulario"
        },
    ]

    return (
        <div className="Desarrollo-1">
            <section class="grid container" id="desarrollo_galery">
                {
                    bucle.map((bucle, i) =>{   
                        return(
                                <a href= {bucle.link} target="_blank">
                                    <div class="item" data-categoria="desarrolloweb" data-etiquetas="desarrollo web páginas paginas sitios sitio codigo ecommerce blog"
                                    data-description="1.hola">
                                        <div class="item-contenido">
                                            <img src={bucle.img} alt="" />
                                        </div>
                                        <small>{bucle.small}</small>
                                    </div>
                                </a>
                            )
                        })
                }
                

            </section>
        </div>
    );
}

export default Desarrollo;