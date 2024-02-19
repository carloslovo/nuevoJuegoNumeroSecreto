let numeroSecreto=0;
let intentos;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML= texto; 
}
function limpiarCaja(){
    document.getElementById("valorUsuario").value="";
}
function condicionesIniciales(){

asignarTextoElemento("h1"," juego del nunero secreto!");
asignarTextoElemento("p"," indica un numero del 1 al 10");
intentos=1;
numeroSecreto=generarNumeroAleatorio();
}


function reiniciarJuego(){
    //Reiniciar el numero de intentos
    //generar un nuevo numero secreto
    //indicar el mensaje de intervalo
    condicionesIniciales();
    //limpar caja
    limpiarCaja();
    // deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

function verificarIntento(){
   let numeroUsuario=parseInt(document.getElementById("valorUsuario").value);
 if (numeroUsuario==numeroSecreto) {
    
 asignarTextoElemento("p",`felicidades, acertaste el numero en ${intentos} ${intentos==1 ? "vez" : "veces"}`);
 document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
    if (numeroUsuario>numeroSecreto) {
    asignarTextoElemento("p","el numero secreto es menor");  
    }
    else{
    asignarTextoElemento("p"," el numero secreto es mayor"); 

    }
    intentos++;
    limpiarCaja();

}
}

function generarNumeroAleatorio(){
    return Math.floor(Math.random()*10)+1;
}
condicionesIniciales();

   /*function mensajeNombre(){
   let nombre=prompt("escriba su nombre");
   alert(`hola ${nombre}`);
   } 
   mensajeNombre();*/
   /*
   ejercio 4
   //crear una function que reciba tres numero como parametros y devuelva su promedio*/
   /*function promedioDeNumeros(numero1, numero2, numero3){
    let promedio=(numero1+numero2+numero3)/3;
    console.log(promedio);
    return promedio;

   }
   promedioDeNumeros(70,40,80);*/

