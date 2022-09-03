//----------> Funcion seleccionar productos
function selecccionarProductos(){
    class Productos{
        constructor(colorProducto, precioProducto, tallaProducto, cantidadProducto){
            this.color = colorProducto;
            this.precio = precioProducto;
            this.talla = tallaProducto;
            this.cantidad = cantidadProducto;
        }
    }

    //Agregar productos a la cola
    const array = [];
    for (let index = 0; index < 1; index++) {
        let colorProducto = prompt("Ingresa el color de tu Sneaker\nBlanco\nNegro\nGris\nCafe\nRojo\nVerde\nRosado\nAzul");
            while(colorProducto.toLowerCase() != "blanco" && colorProducto.toLowerCase() != "negro") {
                alert("Ingresa un color correcto")
                colorProducto = prompt("Ingresa un color de nuestros sneakers\nBlanco\nNegro\nGris\nCafe\nRojo\nVerde\nRosado\nAzul")
            };
            if(colorProducto.toLowerCase() === "blanco") {
                nuevoValor = 700;
             }else if(colorProducto.toLowerCase() === "negro"){
                nuevoValor = 750;
 
             }else{
                 colorProducto = prompt("Ingresa el color de tu Sneaker\nBlanco\nNegro\nGris\nCafe\nRojo\nVerde\nRosado\nAzul")
             };
            
            console.log(colorProducto);
        let precioProducto = nuevoValor;
        let tallaProducto = prompt("Ingresa la talla de tu sneaker\n*No hay tallas medias*\n23\n24\n25\n26");
        let cantidadProducto = prompt(`Ingresa cuantos Sneakers de color ${colorProducto} vas a comprar`)
        let producto = new Productos(colorProducto, precioProducto, tallaProducto, cantidadProducto);


        //> "push" para agregar un pedido a la cola
        array.push(producto);
    }
        
        
       
    //     for(const item of array){
    //         //Acumular la cantidad de productos
    //         const numeroDeProductos = array.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    //         // Cambiar texto de cantidad de productos
    //         document.getElementById("totalProductos").textContent=(numeroDeProductos);
            
    //         document.getElementById("totalPrecio").textContent=(item.precio);
    //     }
        


    // console.log(array);
    
}

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






// //------------- Carrito de compra "Avanzado"

// //>Variables
// const productos = [
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


// let carrito = [];


// //---> Agregar productos al carrito de compra
// function carritoDeCompras(event) {
//     // Añadimos el id a nuestra variable "carrito"
//     carrito.push(event.target.getAttribute("marcador"));

//     console.log(carrito);
//     // Actualizamos el carrito 
//     crearCarrito();
// }

// //---- //---- Añadir productos a carrito de compra
// function crearCarrito(){
//     // Creamos una nueva array
//     const carritoDuplicados = [...new Set(carrito)];
//     //log para ver el funcionamiento del Set
//     console.log(carritoDuplicados);
//     // Comprobamos que no este duplicado los items del nuevo array con los ID del array de productos
//     carritoDuplicados.forEach(function(item){
//         const miProducto = productos.filter(function(itemProducto){
//             return itemProducto.id === parseInt(item);
//         });

//         //log para revisar que se guarden los productos sin duplicar
//         console.log(carritoDuplicados);

//         // Numero de veces que se repiten los productos
//         const numeroDeProductos = carrito.reduce(function(acumulador, itemId){
//             // ¿Coincide las id? Incremento el contador, en caso contrario lo mantengo (Aqui uso ?: para hacer valer las condiciones)
//             return itemId === item ? acumulador += 1: acumulador;}, 0);
//         //log para ver si cuentan los productos individualmente
//         console.log(numeroDeProductos);


//     });
    
// } 




 
 



// let talla = [23,24,25,26,27];
