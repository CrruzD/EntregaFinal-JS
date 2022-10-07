/* VARIABLES IDENTIFICACION */

let contenedorPedirDatos;
let fPedirDatos;
let iDatos;
let bIngresar;
let IdDivPedirDatos;

/* CONSTANTES */

const NOMBREPRODUCTOS = []

const carrito = [];

const productosJS = []

/* MI CONSTRUCTOR */

class Producto{
     constructor (id, nombreProducto, precio){
          this.id = id;
          this.nombreProducto = nombreProducto;
          this.precio = precio;
     }
}





/* VARIABLES AL DOM */

function inicializarElementos (){
     contenedorPedirDatos = document.getElementById("contenedorPedirDatos")
     fPedirDatos = document.getElementById("pedirDatos")
     iDatos = document.getElementById("datos")
     bIngresar = document.getElementById("bIngresar")
     IdDivPedirDatos = document.getElementById("IdDivPedirDatos")
}


function asignarClaseDFlexNone(input){
     if(input !== ""){
          IdDivPedirDatos.className = "display-flex"
          crearLabel()
          mostrarLista()
          eventoBotones();
     }
     else{
          alert("No ingresó un nombre")
     }
}

function eventoBotones(){
     botonMostrarProductos()
}

function crearLabel(){
     contenedorPedirDatos.innerHTML = `<h2 class="m-3 tamanioFuente ">Bienvenido <b> ${iDatos.value}</b> </2>
     <h1>¿Que va a llevar?</h1>`
} 

function mostrarLista(){

     let eliminarClase = document.getElementById("divProductos")
     eliminarClase.classList.remove("display-flex")
}





/* TRAER */


function traerH5() {
     let titulos = document.getElementsByClassName("card-body")
     
      for (let i = 0 ; i<titulos.length ; i++){     
          let identificador = i + 1
          let titulo = titulos.item(i).firstElementChild.innerText
          let precio = titulos.item(i).lastElementChild.innerText
          precio = parseFloat(precio.slice(2))
          productosJS.push(new Producto(identificador, titulo, precio))
          
          }
     
} 

function traerH6(){
     const H6 = document.getElementsByTagName("h6")

     for(item of H6) {
          item.classList.add("tamanioFuentePrecio")
     }
}

function traerP() {
     const P = document.getElementsByTagName("p")

     for (item of P) {
          item.classList.add("tamanioFuente")
     }
}

function traerIds(){
     let botones = document.getElementsByTagName("button")
     let d = 0
     for (let i = 0 ; i < botones.length ; i++){
          if(i>3){
               let precioProducto = productosJS[d].precio
               let nombreProducto = productosJS[d].nombreProducto
               let valorId = botones.item(i).id
               botonComprar(valorId, precioProducto, nombreProducto)
               d++;
          }
          
     }
     
}

/* FUNCION GENERAL PARA TRAER */

function traerTags() {
     traerH5();
     traerH6();
     traerP();
     traerIds();
}


function botonComprar(valorId, precio, nombreProducto){
     let boton = document.getElementById(valorId)
     boton.onclick = () => {
          NOMBREPRODUCTOS.push(nombreProducto)
          carrito.push(precio)
          imprimirCarrito()
     }
}


 function imprimirCarrito(){
     let contenedor = document.getElementById("contenedorCarrito")
     let sum = 0;
     let lis = ""
     for (let i = 0; i < carrito.length; i++) 
     {
          sum += carrito[i];
          lis += `<li>${NOMBREPRODUCTOS[i]}: $${carrito[i]} </li>`
     }
     contenedor.innerHTML = `
     <h4 class="tamanioFuente">TU CARRITO</h4>

          <div id="card2">
             <ul>${lis}</ul>
             <p><b>Precio Total: $${sum}</b></p>
          </div>`
 }
 

const eliminarItem = (id) => {
     let borrar = carrito.find((producto) => producto.id === id)
     let indice = carrito.indexOf(borrar)
     carrito.splice(indice, 1)
     renderCarrito()
     calcularTotal()
}

const divPrecio = document.querySelector("precioTotal")

calcularTotal = () => {
     let cont = 0
     carrito.forEach((pre) => {
          cont += pre.precio
     })

     divPrecio.innerHTML = cont
}


function botonMostrarProductos(){
     let eliminarRemeras = document.getElementById("contenedorRemeras");
     let eliminarCamisas = document.getElementById("contenedorCamisas");
     let eliminarPantalones = document.getElementById("contenedorPantalones");
     let btnRemeras = document.getElementById("Remeras")
     
     
     btnRemeras.onclick = () => {
          
          eliminarRemeras.classList.remove("display-flex")
          eliminarCamisas.className = "display-flex"
          eliminarPantalones.className = "display-flex"


     }

     let btnCamisas = document.getElementById("Camisas")

     btnCamisas.onclick = () => {
          eliminarCamisas.classList.remove("display-flex")
          eliminarRemeras.className = "display-flex"
          eliminarPantalones.className = "display-flex"
     }


     let btnPantalones = document.getElementById("Pantalones")

     btnPantalones.onclick = () => {
          eliminarPantalones.classList.remove("display-flex")
          eliminarCamisas.className = "display-flex"
          eliminarRemeras.className = "display-flex"
     }
     
}


function agregar(){

     const productosId = ["Remeras", "Camisas", "Pantalones"]
 
     let divProductos = document.getElementById("divCentrados")
 
     for(const producto of productosId){
         let li = document.createElement("li")
         li.innerHTML = `<button class="tamanioFuente botones" id="${producto}">${producto}</button>`
         divProductos.appendChild(li)
     }
 
 }
 



function inicializarEventos() {
     fPedirDatos.addEventListener("submit", e => {
         e.preventDefault()
         
         asignarClaseDFlexNone(iDatos.value)

         
     })
     fPedirDatos.reset()
 }
 



function main() {     
     inicializarElementos();
     inicializarEventos();
     traerTags();
     agregar();
  
}

main();