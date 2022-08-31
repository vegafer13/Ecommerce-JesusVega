// const baseDeDatos = [
//     {
//         id: 1,
//         nombre: "sneaker1",
//         precio: 700,
//         imagen: "../assets/productos/producto-1.webp",
//         color: "blanco",
//     },
//     {
//         id: 2,
//         nombre: "sneaker2",
//         precio: 750,
//         imagen: "../assets/productos/producto-2.webp",
//         color: "negro",
//     },
//     {
//         id: 3,
//         nombre: "sneaker3",
//         precio: 600,
//         imagen: "../assets/productos/producto-3.webp",
//         color: "gris",
//     },
//     {
//         id: 4,
//         nombre: "sneaker4",
//         precio: 650,
//         imagen: "../assets/productos/producto-4.webp",
//         color: "cafe",
//     },
//     {
//         id: 5,
//         nombre: "sneaker5",
//         precio: 500,
//         imagen: "../assets/productos/producto-5.webp",
//         color: "rojo",
//     },
//     {
//         id: 6,
//         nombre: "sneaker6",
//         precio: 400,
//         imagen: "../assets/productos/producto-6.webp",
//         color: "verde",
//     },
//     {
//         id: 7,
//         nombre: "sneaker7",
//         precio: 450,
//         imagen: "../assets/productos/producto-7.webp",
//         color: "rosado",
//     },
//     {
//         id: 8,
//         nombre: "sneaker8",
//         precio: 600,
//         imagen: "../assets/productos/producto-8.webp",
//         color: "azul",
//     },
// ]

// let talla = [23,24,25,26,27];


// ------ > Constructora de usuarios
function Usuario(info) {
    this.nombre = info.nombreUser;
    this.email = info.emailUser;
    this.direccion = info.direccionUser;
    this.telefono = info.telefonoUser;
}

let usuario = new Usuario(
    {
    nombreUser: prompt("Agrega tu nombre"),
    emailUser: prompt("Agrega tu correo"),
    direccionUser: prompt("Agrega tu correo"),
    telefonoUser: prompt("Agrega tu correo"), 
}
)

console.log(usuario.nombre);





//----------> Constructora de productos
function Producto(info) {
    this.id = info.idProducto;
    this.nombre = info.nombreProducto;
    this.precio = info.precioProducto;
    this.imagen = info.imagenProducto;
    this.color = info.colorProducto;

}

let producto = new Producto(
    {
    idProducto: prompt("Agrega el id del producto"),
    nombreProducto: prompt("Agrega el nombre del producto"),
    precioProducto: prompt("Agrega el precio del producto"),
    imagenProducto: prompt("Agrega la imagen del producto"),
    colorProducto: prompt("Agrega el color del producto"), 
}
)




let productos_array = [
    {
        id: 1,
        nombre: "sneaker1",
        precio: 700,
        imagen: "../assets/productos/producto-1.webp",
        color: "blanco",
    },
    {
        id: 2,
        nombre: "sneaker2",
        precio: 750,
        imagen: "../assets/productos/producto-2.webp",
        color: "negro",
    },
    {
        id: 3,
        nombre: "sneaker3",
        precio: 600,
        imagen: "../assets/productos/producto-3.webp",
        color: "gris",
    },
    {
        id: 4,
        nombre: "sneaker4",
        precio: 650,
        imagen: "../assets/productos/producto-4.webp",
        color: "cafe",
    },
    {
        id: 5,
        nombre: "sneaker5",
        precio: 500,
        imagen: "../assets/productos/producto-5.webp",
        color: "rojo",
    },
    {
        id: 6,
        nombre: "sneaker6",
        precio: 400,
        imagen: "../assets/productos/producto-6.webp",
        color: "verde",
    },
    {
        id: 7,
        nombre: "sneaker7",
        precio: 450,
        imagen: "../assets/productos/producto-7.webp",
        color: "rosado",
    },
    {
        id: 8,
        nombre: "sneaker8",
        precio: 600,
        imagen: "../assets/productos/producto-8.webp",
        color: "azul",
    },
];

let talla_array = [23,24,25,26,27];
let cart = [];

function displayProducts(productos_array) {
    
    
}