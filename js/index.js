//Variables
const carrito = [];
const nuevoRegistroUser = [];
const nuevoLoginUser = [];
const nuevoNewsletter = [];

//----------> Funcion seleccionar productos
function selecccionarProductos() {
    const productos = [
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

    //variable para medir cuantas veces se puede agregar tickets
    let cantidad = 3; 

    //if para validar que no existen mas de 3 tickets
    if(carrito.length == cantidad){
        alert(`Ya no puede agregar pedidos nuevos`);
        return;
    };



    //Contructor de pedidos
    class Pedido{
        constructor(color, talla, cantidad, total){
        this.color = color;
        this.talla = talla,
        this.cantidad = cantidad;
        this.total = total;
        }
    }

    //while para validar si se pueden agregar mas tickets
    while(carrito.length != cantidad){
        //For para agregar nuevos tickets
        for (let i = 0; i < 1; i++) {
            //Ingresamos el color del sneaker que queremos
            let colorProducto = prompt(`Ticket ${carrito.length + 1}\nIngresa el color de tu Sneaker\nBlanco\nNegro\nGris\nCafe\nRojo\nVerde\nRosado\nAzul`);
            //Convertimos el texto en minuscula para que no interfiera con la busqueda en el array de productos.
            let color = colorProducto.toLowerCase();
            console.log(color);
                while (color != "blanco" && color != "negro" && color != "gris" && color != "cafe" && color != "rojo" && color != "verde" && color != "rosado" && color != "azul") {
                    alert(`Ticket ${carrito.length + 1}\nIngrese algun color que tenemos en nuestro catalago`);
                    continue;
                };
                //Al ingresar un color correcto, se realizara una busqueda en la base de datos: "Productos" 
                let producto = productos.find(item => item.color === color);
                    console.log(producto)
                    console.log(producto.precio)
            //Ingresamos la talla del producto
            let talla = parseInt(prompt(`Ticket ${carrito.length + 1}\nIngresa la talla de tu sneaker\n*No hay tallas medias*\n23\n24\n25\n26`));
                //If para filtrar tallas que tenemos
                if(talla >= 23 && talla < 26) {
                    console.log(talla);
                }else{
                    alert("No contamos con esas tallas de calzado, vuelve a intentar... ");
                    talla= parseInt(prompt(`Ticket ${carrito.length + 1}\nIngresa la talla de tu sneaker\n*No hay tallas medias*\n23\n24\n25\n26`));
                };
            //Ingresamos la cantidad del producto
            let cantidad = parseInt(prompt(`Ticket ${carrito.length + 1}\nIngresa cuantos Sneakers de color ${color} vas a comprar`));
                //filtro para que el usuario ponga un numero
                while (cantidad <= 0) {
                    alert("No pusiste cuantos productos quieres.");
                    cantidad = parseInt(prompt(`Ticket ${carrito.length + 1}\nIngresa cuantos Sneakers de color ${color} vas a comprar`));
                };
            // Se realiza la operacion del precio de los productos seleccionados con la cantidad de productos.
            let total = (producto.precio * cantidad);
            //Una vez realizada la cuenta, se le avisara al usuario las caracteristicas de su pedido.
            let pedido = new Pedido(color, talla, cantidad, total);

            
            //Una vez realizada el total del pedido, se le avisara al usuario las caracteristicas de su pedido.
            let mensaje = `Ticket ${carrito.length + 1}\nYa generamos tu pedido:\n${cantidad} Sneakers de color ${color}\nTotal a pagar: $${total}`;
            alert(mensaje);

             //Escribir en los pedidos en <li>
             document.getElementById(`ticket${carrito.length + 1}`).textContent=(`${carrito.length + 1}`);
             document.getElementById(`cantidad${carrito.length + 1}`).textContent=(`${cantidad}`);
             document.getElementById(`color${carrito.length + 1}`).textContent=(`${color}`);
             document.getElementById(`talla${carrito.length + 1}`).textContent=(`${talla}`);
             document.getElementById(`total${carrito.length + 1}`).textContent=(`$ ${total}`);

            //> "push" para agregar ticket a la cola
            carrito.push(pedido);

            // document.getElementById(`ticket${carrito.length + 1}`).textContent=(`${cantidad} - Sneakers color ${color} Total = $${total}`);

            //Hacer la suma total del costo de todos los pedidos y mostrarlo en el index
            const cantidadTotal = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
            document.getElementById("totalProductos").textContent=(cantidadTotal);
                    //Se muestra en la parte superior de carrito de compra
            document.getElementById("totalProductosCart").textContent=(cantidadTotal);

            //Hacer la suma total del costo de todos los pedidos y mostrarlo en el index
            const acumuladoTotal = carrito.reduce((acumulador, item) => acumulador + item.total, 0);
            document.getElementById("totalPrecio").textContent=(`$ ${acumuladoTotal}`);
                    //Se muestra en la parte superior de carrito de compra
            document.getElementById("totalPrecioCart").textContent=(`$ ${acumuladoTotal}`);


        console.log(acumuladoTotal);

        }

        let otroPedido = confirm(`¿Desea realizar otro pedido?`)
        
        if(otroPedido == false){
            alert(`${carrito.length} Pedido creado`)
            return
        }else if(carrito.length == cantidad){
            alert(`Ya existen la cantidad maxima de pedidos\nElimine un pedido para crear uno nuevo`)
            return
        }

        
    }
    console.log(carrito);

}

// Boton para pagar y aplicar descuento por monto de compra
function pagarDescuento() {
    //Hacer la suma total del costo de todos los pedidos y mostrarlo en el index
    const acumuladoTotal = carrito.reduce((acumulador, item) => acumulador + item.total, 0);


    console.log(acumuladoTotal);

    //Aplicar descuento por cada cierto monto de compra
    // 0 - 500 = 0%
    // 500 - 1500 = 5%
    // 1500 - 5000 = 10%
    // 5000 > = 15%

    // let montoDeVenta = parseInt(prompt("Ingrese la venta total"));
    let descuento = 0;
    let ventaText = "";

        if (acumuladoTotal > 0 ) {
            if (acumuladoTotal >= 0 &&  acumuladoTotal < 500){
                descuento = 0;
                ventaText = `El valor de tu compra no se aplico un descuento 😪`;
            }else if (acumuladoTotal >= 500 && acumuladoTotal < 1500){
                descuento = 0.05;
                ventaText = `El valor de tu compra se aplico un 5% de descuento,\nAhorraste $${acumuladoTotal * descuento} por tu compra🤑\n`; 
            }else if (acumuladoTotal >= 1500 && acumuladoTotal <5000){
                descuento = 0.10;
                ventaText = `El valor de tu compra se aplico un 10% de descuento,\nAhorraste $${acumuladoTotal * descuento} por tu compra🤑\n`;
            }else{
                descuento = 0.15;
                ventaText = `El valor de tu compra se aplico un 15% de descuento,\nAhorraste $${acumuladoTotal * descuento} por tu compra🤑\n`; 
            };

                let montoTotal = (acumuladoTotal - (acumuladoTotal * descuento));
                alert(`${ventaText}Total a pagar 🏷$${montoTotal}`);

            }else{
                alert("Ingresa un valor");
        }
    
}

// ----------> eliminar pedidos
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];


}

//----------> Funcion Registro de usuario (Boton Crear cuenta)
function registroUser() {
    //>Constructor de usuarios
    class User{
        constructor(nombreUser, contraseñaUser, sexoUser, emailUser, direccionUser){
          this.nombre = nombreUser;
          this.contraseña = contraseñaUser;
          this.sexo = sexoUser;
          this.email = emailUser;
          this.direccion = direccionUser;
        }
    }

    //>for para agregar nuevos usuarios
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
        let user = new User(nombreUser, contraseñaUser, sexoUser, emailUser, direccionUser);
        //> "push" para agregar usuario a la cola
        nuevoRegistroUser.push(user);
    }

    console.log(nuevoRegistroUser);

    //> Reemplazar el texto de "Usuario" en html por el "Nombre de usuario ingresado"
    for(const item of nuevoRegistroUser){
        document.getElementById("textUser").textContent=(item.nombre);
    }

    document.getElementById("saludoUser").textContent="Bienvenido";
    
    
}



//--------Funcion Login de Usuario (Boton Login)
function loginUsuario() {
    //Constructor de usuarios
    class Usuario{
        constructor(nombreUsuario, contraseñaUsuario){
          this.nombre = nombreUsuario;
          this.contraseña = contraseñaUsuario;
        }
    }
    
    //>for para agregar usuarios
    for (let index = 0; index < 1; index++){
        let nombreUsuario = prompt("Ingresa tu nombre");
        let contraseñaUsuario = prompt("Ingrese tu contraseña");
        let usuario = new Usuario(nombreUsuario, contraseñaUsuario); 
        //> "push" para agregar usuario a la cola
        nuevoLoginUser.push(usuario);
        //> Condicion para poner bien la contraseña 1234, sin importar el usuario
        let intentos = 3;
        while (nombreUsuario != undefined) {
            if (intentos > 0) {
                if (contraseñaUsuario === "1234") {
                    alert(`Bienvenido ${nombreUsuario}`);
                    document.getElementById("textUser").textContent=(nombreUsuario);
                    document.getElementById("saludoUser").textContent="Bienvenido";
                    break;
                }else if(contraseñaUsuario != "1234") {
                    contraseñaUsuario = prompt(`Contraseña invalida, te quedan ${intentos} intentos`);
                    intentos--;
                    continue;
                }
            }else{
                alert("Haz intentado varias veces, intentelo mas tarde");
                break;
            }
        }
    }
    console.log(nuevoLoginUser);
}


// -------------> Funcion Registro Newsletter (Button Registrarse)
function registroNewsletter() {
    //>Constructor de correos
    class UserNewsletter{
        constructor( emailUser){
          this.email = emailUser;
        }
    }
    
    //>for para agregar correos registrados
    for (let index = 0; index < 1; index++){
        let emailUser = document.getElementById("emailNewsletter").value;
             if (emailUser.length > 1) {
                console.log(emailUser);
                //> for para mandar alerta de registro
                alert(`Te registraste con el correo ${emailUser} 📧 \nPronto te llegaran nuestras promociones 🏷\n `);
             }else{
                alert("Ingresa un correo")
                emailUser = document.getElementById("emailNewsletter").value;
             }
        let emailNew = new UserNewsletter(emailUser);

        //> "push" para agregar correos a la cola
        nuevoNewsletter.push(emailNew);

        
    }

    
    console.log(nuevoNewsletter);
    
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
