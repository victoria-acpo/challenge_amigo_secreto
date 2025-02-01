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

//actualizarLista();


