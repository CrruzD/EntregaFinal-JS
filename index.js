/* VARIABLES IDENTIFICACION */

let contenedorPedirDatos;
let fPedirDatos;
let iDatos;
let bIngresar;
let IdDivPedirDatos;

/* VARIABLES AL DOM */

function incializarElementos (){
     contenedorPedirDatos = document.getElementById("contenedorPedirDatos")
     fPedirDatos = document.getElementById("pedirDatos")
     iDatos = document.getElementById("datos")
     bIngresar = document.getElementById("bIngresar")
     IdDivPedirDatos = document.getElementById("IdDivPedirDatos")
}

/* EVENTOS */

// function inicializarEventos() {
//      contenedorPedirDatos.onsubmit = (e) => contenedorPedirDatos(e);
// }

function validarIdentificacion() {
     
     // contenedorPedirDatosV = contenedorPedirDatos.value;
     // fPedirDatosV = fPedirDatos.value;
     // iDatos = iDatos.value;
     // bIngresarV = bIngresar.value;
     // console.log(iDatos.value)
     
}

function asignarClaseDFlexNone(input){
     if(input !== ""){
          IdDivPedirDatos.className = "display-flex"
          crearLabel()
          mostrarLista()
     }
     else{
          alert("No ingresó un nombre")
     }
}

function crearLabel(){
     contenedorPedirDatos.innerHTML = `<h4 class="m-3 tamañoFuente ">Hola <b> ${iDatos.value}</b>, que desea llevar? </4>`
} 

function mostrarLista(){

     let eliminarClase = document.getElementById("divProductos")
     eliminarClase.classList.remove("display-flex")
}




function agregar(){

     const productosId = ["Remeras", "Camisas", "Sweters", "Buzos", "Pantalones", "Bermudas"]
 
     let divProductos = document.getElementById("divProductos")
 
     for(const producto of productosId){
         let li = document.createElement("li")
         li.innerHTML = `<button class="tamañoFuente display-flex botones" id="producto">${producto}</button>`
         divProductos.appendChild(li)
     }
 
 }
 
 


function inicializarEventos() {
     fPedirDatos.addEventListener("submit", e => {
         e.preventDefault()
         
         validarIdentificacion()
         asignarClaseDFlexNone(iDatos.value)

         
     })
     fPedirDatos.reset()
 }




/* function presionarBoton (){
     contenedorPedirDatos.onclick =
} */


function main() {     
     incializarElementos();
     inicializarEventos();
     agregar()
     
     
}

main();