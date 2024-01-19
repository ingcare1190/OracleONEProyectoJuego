let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo =10
document.getElementById('Intento').removeAttribute('disabled');


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos===1)?'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }
    else{
        //el usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }
        else{
            asignarTextoElemento('p','El número secreto es mayor');
        }

    intentos++;

    limpiarCaja();
    }
    return;
}
function condicionesIniciales() {

    //reinicia numerosecreto, reinicia mensajes iniciales, reinicia numero de intentos;
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}
function reinciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    // desabilitar boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
   
}

function limpiarCaja() {
   document.querySelector('#numeroUsuario').value= '';

    
}
function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log (numeroGenerado)
   console.log (numerosSorteados)
   //salir al llegar a el 30% de los numeros

if(numerosSorteados.length >= (numeroMaximo*.3) ){
    asignarTextoElemento('p', `Se terminaron tus oportunidades`);
    document.getElementById('reiniciar').setAttribute('disabled','true');
    document.getElementById('Intento').setAttribute('disabled','true');}
else{

   //revisar si ya se sortearon todos los numeros
   if(numerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', `Terminaste de Jugar con todos los numeros!`);
   }
   else {
   //si el numero generado esta en la lista
   if(numerosSorteados.includes(numeroGenerado)){

}
    else{numerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}}}


}

condicionesIniciales();