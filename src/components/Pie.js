import React, {Component} from 'react';
import '../assets/css/App.css';
import '../assets/css/portfolio.css';
import flecha from '../assets/img/flecha.png'

let year = new Date().getFullYear()
class Pie extends Component{
    

    render(){
        return(
            <footer>
                <a href="#flecha">
                    <img src={flecha} alt="" class="flecha"/>
                </a>
                <br/><br/>
                <span>Creado por <a href="index.html">Lilén Amado</a> | <span class="fa fa-copyright"></span> Todos los derechos reservados - {year}.</span>
                <br/><br/>
            </footer>
        )
    }
}
 
export default Pie;