import React from 'react';
import '../assets/css/App.css';
import Menuport from '../components/Menuport'
import Pie from '../components/Pie'
import Desarrollo from '../components/Desarrollo'
import Audiovisual from '../components/Audiovisual'

function Portfolio() {

    let btn = [{
        valor:"Desarrollo Web",
        id: "desarrollo"
    },
    {
        valor:"Audiovisual",
        id:"audiovisual"
    },
    {
        valor:"Diseño",
        id:"design"
    }]

    return (
        <div className="Portfolio-1">
            <Menuport />

                <main class="portfolio" id="flecha">
                    <h1>Portfolio</h1>

                    <section class="categorias-port">
                        <div class="botones-port flex-port" id="categorias-port">
                            {
                                btn.map((btn, i) =>{   
                                    return(
                                        <input type="button" value={btn.valor} id={btn.id}/>
                                    )
                                })
                            }
                        
                        </div>

                    </section>

                    
                    <Desarrollo />
                    <Audiovisual />

                    <p class="container aclaracion" id="aclaracion">Por motivos de espacio la resolución de los archivos de audio y video no son los más adecuados.</p>
                        
                    <br/><br/>
                </main>


            <Pie />
        </div>
    );
}

export default Portfolio;