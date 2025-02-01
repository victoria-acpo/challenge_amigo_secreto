// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Challenge amigo secreto - Autor: Victoria Lizberh Acevedo Ponce.

// Variables globales 

let listaDeAmigos = [];



function agregarAmigo(){

    // Capturar el valor del campo de entrada
    let nombreAmigo = document.getElementById('amigo').value;

    // Validar la entrada 
    if(nombreAmigo === ''){
        alert("Por favor, inserte un nombre");
        return;
    } 
    // Actualizar el array de amigos 
        listaDeAmigos.push(nombreAmigo);
        console.log(listaDeAmigos);

    // Limpiar el campo de entrada
        let valorEntrada = document.querySelector('#amigo').value = '';

        actualizarLista();

    

}  

function actualizarLista(){
    
    //Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar lista existente
    lista.innerHTML = "";

    // Itera sobre el arreglo con un bucle for para crear elementos de la lista <li>

    for (let i = 0; i < listaDeAmigos.length; i++){

        // Crea elemento <li> y se agrega a la lista 
       lista.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
     
    }
    
}

function sortearAmigo(){
    // Validar que haya amigos disponibles
    if (listaDeAmigos.length === 0){
        alert("No hay amigos para sortear.");
        return;
    } else {
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    console.log(indiceAleatorio)
    // Obtener el nombre sorteado 
    let nombreSorteado = listaDeAmigos[indiceAleatorio];
    // Mostrar el resultado 
    let resultado = document.getElementById("resultado");
    
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${nombreSorteado}</strong>`;
    }
}


