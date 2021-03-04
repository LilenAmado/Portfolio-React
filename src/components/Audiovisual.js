import React from 'react';
import '../assets/css/App.css';

// Importo videos
import video1 from '../assets/audiovisual/globalUnionPropaganda.mp4'
import video2 from '../assets/audiovisual/suavePropaganda.mp4'
import video3 from '../assets/audiovisual/simsJuego.mp4'
import video4 from '../assets/audiovisual/videoclipGuitar.mp4'

// Importo audios
import audio1 from '../assets/audiovisual/reunionesEspeciales.wav'
import audio2 from '../assets/audiovisual/deporte.mp3'
import audio3 from '../assets/audiovisual/motocross.mp3'
import audio4 from '../assets/audiovisual/diasdeEter.wav'


function Audiovisual() {

    let bucle1 = [
        {
            link: video1,
            tipo: "video/mp4",
            small: "Diseño Sonoro"
        },{
            link: video2,
            tipo: "video/mp4",
            small: "Diseño Sonoro"
        },{
            link: video3,
            tipo: "video/mp4",
            small: "Diseño Sonoro"
        },{
            link: video4,
            tipo: "video/mp4",
            small: "Grabación y edición de la imagen"
        },
    ]
    let bucle2 = [
        {
            link: audio1,
            tipo: "audio/mpeg",
            small: "Artística de Radio"
        },{
            link: audio2,
            tipo: "audio/mpeg",
            small: "Artística de Radio"
        },{
            link: audio3,
            tipo: "audio/mpeg",
            small: "Artística de Radio"
        },{
            link: audio4 ,
            tipo: "audio/mpeg",
            small: "Artística de Radio"
        },
    ]

    return (
        <div className="Audiovisual-1">
            
            <section class="grid container" id="audiovisual_galery">
                {
                    bucle1.map((bucle1, i) =>{   
                        return(
                            <div>
                                <video class="widthVideo" controls controlslist="nodownload">
                                    <source src={bucle1.link} type={bucle1.tipo} />
                                </video>
                                <small class="color">{bucle1.small}</small>
                            </div>
                        )
                    })
                }

                {
                    bucle2.map((bucle2, i) =>{   
                        return(
                            <div>
                                <audio controls class="widthVideo" controlslist="nodownload">
                                    <source src= {bucle2.link} type= {bucle2.tipo}/>
                                </audio>
                                <small class="color">{bucle2.small}</small>
                            </div>
                        )
                    })
                }

            </section>
            
            
            
            
            {/*
             style="display: none;"
            */}
        </div>



        
    );
}

export default Audiovisual;