//DECLARACION DE VARIABLES
const productos = [
  {
    id: 1,
    nombre: "Metal Gear SOLID 2 FIGMA",
    precio: 106.21,
    categoria: "figuras",
    imagen: "🗿",
    stock: 50,
  },
  {
    id:2,
    nombre:"HATSUNE MIKU NOODLE STOPPER",
    precio:27.00,
    categoria:"figuras",
    imagen:"🗿",
    stock:50,
  },
  {
    id:3,
    nombre:"ONE PIECE 01",
    precio:8.08,
    categoria:"manga",
    imagen:"📕",
    stock: 50,},
    
    {
     id:4,
    nombre:"BERSERK 40",
    precio:9.50,
    categoria:"manga",
    imagen:"📕",
    stock: 50,
    },
    {
     id:5,
    nombre:"RANMA 1/2 BOX DVD",
    precio:29.75,
    categoria:"animeDvd",
    imagen:"📀",
    stock: 50,
    },
    {
     id:6,
    nombre:"BLUE GIANT DVD",
    precio:11.40,
    categoria:"animeDvd",
    imagen:"📀",
    stock: 50
    },
];
let carrito= [];
let sesionActiva= sessionStorage.getItem("sesionActiva") === "true";
let nombreUsuario=sessionStorage.getItem("nombreUsuario")||"";

/**CREO UNA FUNCIÓN PARA RECORRER LA LISTA DE LOS PRODUCTOS UTILIZANDO UN METODO QUE 
 * RECORRA LA LISTA UTILIZANDO EL FOREACH PORQUÉ ? Y  OTRA IMPORTANTE SERÍA PORQUE NO
 *  EL METODO MAP ? PUES ES BASTANTE SIMPLE Y ES QUE NO ME INTERESA QUE  SE GENERE
 * UN NUEVO ARRAY POR ESO ME ES MÁS ÓPTIMO EL FOREACH QUE EL .MAP
 */

function recorrerProductos(productos){
const caja = document.getElementById("lista-producto");
if(!caja)return;
caja.innerHTML="";

productos.forEach(function(producto){
  const tarjeta = document.createElement("div");
  tarjeta.className= "tarjeta-producto";

  tarjeta.innerHTML =  `
    <h3>${producto.nombre}</h3>
   <p>precio :${producto.precio.toFixed(2)}</p>
   <button onclick="agregarAlCarrito(${producto.id})">agregar</button> `;
   
caja.appendChild(tarjeta);
 
});

}
recorrerProductos(productos);

/*agregarAlCarrito es una función que busca si el producto 
*existe en el carrito si no existe añade el objeto y si existe
*suma +1 a la cantidad de ese objeto.
*/
function agregarAlCarrito(id) {
  const productoCarrito = carrito.find(function(item){
  return item.id === id ;
  });

  if(productoCarrito){
    productoCarrito.cantidad++;

  }else{
    const producto = productos.find(function(item){
      return item.id === id;
    });
    carrito.push({...producto,cantidad: 1});
  }
CalcularTotal();
actualizarCarrito();
}

function CalcularTotal(){
 const total = carrito.reduce(function(acumulador,item){
  return acumulador + (item.cantidad * item.precio);
 },0);
 const totalconte = document.getElementById("total-carrito");
 if(totalconte){
  totalconte.textContent= total.toFixed(2);
 }
console.log(total.toFixed (2));

}

function actualizarCarrito(){
const listaCarro = document.getElementById("lista-carrito");
if(!listaCarro) return;
listaCarro.innerHTML="";

carrito.forEach(function(item){
const elemento = document.createElement("div");
elemento.className = "item-carrito";
elemento.innerHTML= `
      <p>${item.nombre} x${item.cantidad} - ${(item.precio * item.cantidad).toFixed(2)}€</p>
    `;
    listaCarro.appendChild(elemento);
});
}

function mostrarCarrito(){
  const contenedor = document.getElementById("carrito-contenedor");
  if(!contenedor)return;

  if(contenedor.style.display ==="none"){
    contenedor.style.display = "block";
  }else{
    contenedor.style.display= "none";
  }
}

function filtrarPorCategoria(categoria){
const productoCategoria = productos.filter(function(producto){
return producto.categoria === categoria;
});

recorrerProductos(productoCategoria);

}

function ordenarPorPrecio(){
const productOrdenado = [...productos].sort(function(a,b){
return a.precio - b.precio; 

});
recorrerProductos(productOrdenado);

}

function mantenerSesion(){
if(sesionActiva){

  sesionActiva =false;
  nombreUsuario=""
  sessionStorage.removeItem("sesionActiva");
  sessionStorage.removeItem("nombreUsuario")
}else{
  const input = prompt ("¿Como te llamas?");
  if(input&& input.trim()!==""){
  nombreUsuario= input.trim();
  sesionActiva = true;

  sessionStorage.setItem("sesionActiva","true");
  sessionStorage.setItem("nombreUsuario",nombreUsuario);

  }else{
    return;
  }
 
}

actualizarSesionUI();
}

function actualizarSesionUI(){
const boton =document.getElementById("login");
const estado=document.getElementById("estado");
  if(!boton|| !estado) return;
if(sesionActiva){
  boton.textContent ="Cerrar Sesion";
  estado.textContent = "Bienvenido,"+nombreUsuario;
}else{
  boton.textContent =" Iniciar Sesion";
  estado.textContent ="";
}
}
function barraBusquedad(){
const buscador = document.getElementById("buscador");
if(!buscador)return;

const productoBuscado = buscador.value.toLocaleLowerCase().trim();
const filtrado = productos.filter(function(producto){
const nombreProducto = producto.nombre.toLowerCase(); 
return nombreProducto.includes(productoBuscado);
});

recorrerProductos(filtrado);
}

recorrerProductos(productos);
actualizarSesionUI();
