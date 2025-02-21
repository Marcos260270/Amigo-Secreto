// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

let numeroAmigos = 0;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =  texto;
    return;

}

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == ""){
        alert('Por favor, inserte un nombre');
    }else{
      listaAmigos.push(nombreAmigo);
      recorreArray(listaAmigos,listaAmigos.length);
      /*asignarTextoElemento('ul',listaAmigos);*/
      cleanbox();
      numeroAmigos++;
      console.log(listaAmigos,numeroAmigos); 
    }

}
 
function cleanbox(){
        document.querySelector('#amigo').value = '';
   }    
   

function sortearAmigo() {
    /*alert(listaAmigos.length)*/
    if (listaAmigos.length != 0){

        let indice = (Math.floor(Math.random()*listaAmigos.length)+1)-1;
        /*alert(`Tu amigo secreto es :  ${listaAmigos[indice]}`);*/
        /*/document.querySelector('#resultado').value = listaAmigos[indice];*/
        asignarTextoElemento('ul',`Tu amigo secreto es :  ${listaAmigos[indice]}`);
        limpiaSorteo();

    }else{
        alert('Debes ingresar al menos un amigo');
    }
}

function limpiaSorteo(){
    cleanbox()
    listaAmigos = [];
    numeroAmigos = 0;
/*    document.getElementById("listaAmigos").innerHTML = "";*/
    return;
}

function recorreArray(arreglo,maximo){
    /*document.querySelector('#listaAmigos').value = '';*/
    document.getElementById("listaAmigos").innerHTML = "";
    

    /*listaAmigos.innerHTML = "";*/

    for (let i = 0; i < maximo; i++){
        let xx = arreglo[i];
        

        var ul = document.getElementById("listaAmigos");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(xx));
        ul.appendChild(li);        
        
        
    }
    ;
}

