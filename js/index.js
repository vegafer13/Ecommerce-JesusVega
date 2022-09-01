//----------> Funcion Registro de usuario (Button Crear cuenta)
function registroUser() {
    //>Constructor de usuarios
    class Usuario{
        constructor(nombreUser, contraseñaUser, sexoUser, emailUser, direccionUser){
          this.nombre = nombreUser;
          this.contraseña = contraseñaUser;
          this.sexo = sexoUser;
          this.email = emailUser;
          this.direccion = direccionUser;
        }
    }

    //>Array para agregar usuarios
    const array = [];
    for (let index = 0; index < 1; index++){
        let nombreUser = prompt("Ingresa tu nombre");
        let contraseñaUser = prompt("Ingrese tu contraseña");
        let sexoUser = prompt("Ingrese tu sexo:\n- Masculino\n- Femenino");
            //> Condicion para escribir sexo "masculino" o "Femenino"
            while(sexoUser.toLowerCase() != "masculino" && sexoUser.toLowerCase() != "femenino"){
                alert(`No se ingreso correctamente el Genero del Usuario`)
                sexoUser = prompt(`Usuario ${nombreUser}\nIngresa tu genero:\n- Masculino\n- Femenino`)
            };
        let emailUser = prompt("Ingrese un correo");
        let direccionUser = prompt("Ingresa tu direccion de envio");
        let usuario = new Usuario(nombreUser, contraseñaUser, sexoUser, emailUser, direccionUser);


        //> "push" para agregar usuario a la cola
        array.push(usuario);
    }

    console.log(array);

    //> Reemplazar el texto de "Usuario" en html por el "Nombre de usuario ingresado"
    for(const item of array){
        document.getElementById("textUser").textContent=(item.nombre);
    }

    document.getElementById("saludoUser").textContent="Bienvenido";
    
    
}



//--------Funcion Login de Usuario (Button Login)
function loginUser() {
    //>Constructor de usuarios
    class Usuario{
        constructor(nombreUser, contraseñaUser,){
          this.nombre = nombreUser;
          this.contraseña = contraseñaUser;
        }
    }
    
    //>Array para agregar usuarios
    let intentos = 3;

    const array = [];
    for (let index = 0; index < 1; index++){
        let nombreUser = prompt("Ingresa tu nombre");
        let contraseñaUser = prompt("Ingrese tu contraseña");
        let usuario = new Usuario(nombreUser, contraseñaUser); 
        
        //> Condicion para poner bien la contraseña 1234, sin importar el usuario
        while (nombreUser != undefined) {
            if (intentos > 0) {
                if (contraseñaUser === "1234") {
                    alert(`Bienvenido ${nombreUser}`);
                    document.getElementById("textUser").textContent=(nombreUser);
                    document.getElementById("saludoUser").textContent="Bienvenido";
                    break;
    
                }else if(contraseñaUser != "1234") {
                    contraseñaUser = prompt(`Contraseña invalida, te quedan ${intentos} intentos`);
                    intentos--;
                    continue;
                }
            }else{
                alert("Haz intentado varias veces, intentelo mas tarde");
                break;
            }
        }

        //> "push" para agregar usuario a la cola
        array.push(usuario);
    }

    console.log(array);
}


// -------------> Funcion Registro Newsletter (Button Registrarse)
function registroNewsletter() {
    //>Constructor de correos
    class UserNewsletter{
        constructor( emailUser){
          this.email = emailUser;
        }
    }
    
    //>Array para agregar correos registrados
    const array = [];
    for (let index = 0; index < 1; index++){
        let emailUser = document.getElementById("emailNewsletter").value;
        let emailNew = new UserNewsletter(emailUser);

        //> "push" para agregar correos a la cola
        array.push(emailNew);
    }

    //> for para mandar alerta de registro
    for(const item of array){
        alert(`Te registraste con el correo ${item.email} 📧 \nPronto te llegaran nuestras promociones 🏷\n `);
    }

    console.log(array);
    
}


//------------- Carrito de compra

//>Variables
const baseDeDatos = [
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
]

let carrito = [];


//---> Agregar productos al carrito de compra
function carritoDeCompras(event) {
    // Añadimos el id a nuestra variable "carrito"
    carrito.push(event.target.getAttribute("marcador"));

    console.log(carrito);
    // Actualizamos el carrito 
    renderizarCarrito();
}

//---- //---- Añadir productos a carrito de compra
function renderizarCarrito(){
    const carritoDuplicados = [...new Set(carrito)];
    carritoDuplicados.forEach(item(element){
        
    });
        
} 




    // const carritoSinDuplicados = [...new Set(carrito)];
    // carritoSinDuplicados.forEach(item => {
    //     // Obtenemos el item que necesitamos de la variable base de datos
    //     const miItem = baseDeDatos.filter((itemBaseDatos) => {
    //         // ¿Coincide las id? Solo puede existir un caso
    //         return itemBaseDatos.id === parseInt(item);
    //     });
    // })
    // const numeroUnidadesItem = carrito.reduce((total, itemId) => {
    //     // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
    //     return itemId === item ? total += 1 : total;
    // }, 0);
    // // Creamos el nodo del item del carrito
    // const miNodo = document.createElement('li');
    // miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
    // miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;


    // let id = baseDeDatos.find(item => item.id === carrito);
    // console.log(id);


}
 
 



// let talla = [23,24,25,26,27];


// ------ > Constructora de usuarios
// function Usuario(info) {
//     this.nombre = info.nombreUser;
//     this.email = info.emailUser;
//     this.direccion = info.direccionUser;
//     this.telefono = info.telefonoUser;
// }

// let usuario = new Usuario(
//     {
//     nombreUser: prompt("Agrega tu nombre"),
//     emailUser: prompt("Agrega tu correo"),
//     direccionUser: prompt("Agrega tu correo"),
//     telefonoUser: prompt("Agrega tu correo"), 
// }
// )

// console.log(usuario.nombre);





// //----------> Constructora de productos
// function Producto(info) {
//     this.id = info.idProducto;
//     this.nombre = info.nombreProducto;
//     this.precio = info.precioProducto;
//     this.imagen = info.imagenProducto;
//     this.color = info.colorProducto;

// }

// let producto = new Producto(
//     {
//     idProducto: prompt("Agrega el id del producto"),
//     nombreProducto: prompt("Agrega el nombre del producto"),
//     precioProducto: prompt("Agrega el precio del producto"),
//     imagenProducto: prompt("Agrega la imagen del producto"),
//     colorProducto: prompt("Agrega el color del producto"), 
// }
// )




// let productos_array = [
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
// ];

// let talla_array = [23,24,25,26,27];
// let cart = [];

// function displayProducts(productos_array) {
    
    
// }