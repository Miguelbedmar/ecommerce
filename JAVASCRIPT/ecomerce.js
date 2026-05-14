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
/**CREO UNA FUNCIÓN PARA RECORRER LA LISTA DE LOS PRODUCTOS UTILIZANDO UN METODO QUE 
 * RECORRA LA LISTA UTILIZANDO EL FOREACH PORQUÉ ? Y  OTRA IMPORTANTE SERÍA PORQUE NO
 *  EL METODO MAP ? PUES ES BASTANTE SIMPLE Y ES QUE NO ME INTERESA QUE  SE GENERE
 * UN NUEVO ARRAY POR ESO ME ES MÁS ÓPTIMO EL FOREACH QUE EL .MAP
 */

function recorrerProductos(productos){
const caja = document.getElementById("lista-producto");
caja.innerHTML="";

productos.forEach(function(producto){
  const tarjeta = document.createElement("div");
  tarjeta.className= "tarjeta-producto";

  tarjeta.innerHTML =  `
    <h3>${producto.nombre}</h3>
   <p>precio :${producto.precio.toFixed(2)}</p>
   <button>agregar</button></p> `;
   
caja.appendChild(tarjeta);
 
});

}
recorrerProductos(productos);

/*agregarAlCarrito es una función que busca si el producto 
*existe en el carrito si no existe añade el objeto y si existe
*suma +1 a la cantidad de ese objeto.
*/
function agregarAlCarrito(id) {
  const productoCarrito = carrito.find();

  if(productoCarrito){

  }else{
    const producto = producto.find();
    carrito.push();
  }
}
