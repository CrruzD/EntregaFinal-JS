/* VARIABLES IDENTIFICACION */

let contenedorPedirDatos;
let fPedirDatos;
let iDatos;
let bIngresar;

/* VARIABLES AL DOM */

function incializarElementos (){
     contenedorPedirDatos = document.getElementById("contenedorPedirDatos")
     fPedirDatos = document.getElementById("pedirDatos")
     iDatos = document.getElementById("datos")
     bIngresar = document.getElementById("bIngresar")
}

/* EVENTOS */

function inicializarEventos() {
     contenedorPedirDatos.onsubmit = (e) => contenedorPedirDatos(e);
}

function validarIdentificacion(e) {
     e.preventDefault();
     let contenedorPedirDatos = contenedorPedirDatos.value;
     let fPedirDatos = fPedirDatos.value;
     let iDatos = iDatos.value;
     let bIngresar = bIngresar.value;
}

function main() {     
     incializarElementos();
     inicializarEventos();
     validarIdentificacion();
}

main();