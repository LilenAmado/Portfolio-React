//Presentación
const typed = new Typed('.typed', {
    strings: ['Desarrollo Web Front-End',
              'Maquetación web',
              'Operación Técnica de Radio'],
    //stringsElement: ,
    typeSpeed: 75, //Velocidad en milisegundos para poner una letra
    startDelay: 300, //Tiempo de retraso en iniciar la animación
    backSpeed: 75, //Velocidad en milisegundos en borrar una letra
    smartBackspace: false, //Eliminar solamente las palabreas que sean nuevas en una cadena de texto
    shuffle: false, //Alterar el orden en el que escribe las palabras
    backDelay: 2000, //Tiempo de espera despues de que termina de escribir una palabra
    loop: true, //Repetir el array
    loopCount: false, //Cant de veces que repite el array. False = infinite
    showCursor: true, //Si el cursor palpita 
    cursorChar: '|', //Caracter de cursor
    contentType: 'html', //html o null para texto sin formato
}) 

//////////// VER COMO HACER FUNCIONAR ESTO