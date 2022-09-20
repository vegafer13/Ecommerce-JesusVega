
// Variables array
const carrito = [];
const nuevoRegistroUser = [];
const nuevoLoginUser = [];
const nuevoNewsletter = [];

//------- Renderizamos los productos al index por medio de DOM
const mostrarProductos = (productos) => {
    //Ponemos el id del contenedor donde vamos a colocar el los productos
    const cardProductos = document.getElementById("productCard")

    //Iniciamos un llamado por medio de forEach, donde se crea cada uno de los productos
    productos.forEach(producto => {
        const div = document.createElement("div")
        //agregamos una class que tendra la tarjeta de cada producto
        div.classList.add("col", "mb-5")
        //incrustamos el html con la informacion del producto dentro de la clase
        div.innerHTML += `<div class="card h-100">
                            <img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">${producto.nombre}</h5>
                                    <div id="listStar" class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    <select class="form-select">
                                        <option class="text-center">Tallas</option>
                                        <option class="text-center" id="talla${producto.tallas[0]}">23</option>
                                        <option class="text-center" id="talla${producto.tallas[1]}">24</option>
                                        <option class="text-center" id="talla${producto.tallas[2]}">25</option>
                                        <option class="text-center" id="talla${producto.tallas[3]}">26</option>
                                        <option class="text-center" id="talla${producto.tallas[4]}">27</option>
                                        <option class="text-center" id="talla${producto.tallas[5]}">28</option>
                                    </select>
                                    <div class="pt-3">$${producto.precio}</div>
                                </div>
                            </div>
                            <div class="card-footer pb-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center">
                                <button type="button" class="btn btn-light btn-outline-dark mt-auto" id="boton${producto.id}">Agregar al carrito</button>
                            </div>
                        </div>`

    //Creamos la union de const div como hijo de cardProduct
    cardProductos.appendChild(div);
    
    //Creamos un llamado de funcion por medio del boton, para que inicie una accion cada vez que le den clic al boton del producto
    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', () => {
        carritoIndex(producto.id)
        alert(`Se agrego el producto ${producto.nombre}`)
    })
    
    });
    
}

mostrarProductos(productos)


    

//----------> Funcion seleccionar productos
function selecccionarProductos() {

    //variable para medir cuantas veces se puede agregar tickets
    let cantidad = 3; 

    //Variable para generar una lista desde la base de datos, de cada color de los sneakers
    let colorBaseDatos = productos.map((item) => item.color);

    //if para validar que no existen mas de 3 tickets
    if(carrito.length == cantidad){
        alert(`Ya no puede agregar pedidos nuevos`);
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
            // let colorProducto = prompt(`Ticket ${carrito.length + 1}\nIngresa el color de tu Sneaker\nBlanco\nNegro\nGris\nCafe\nRojo\nVerde\nRosado\nAzul`);
            let colorProducto = prompt(`Ticket ${carrito.length + 1}\nIngresa el color de tu Sneaker \n${colorBaseDatos.join("\n")}`);
            //Convertimos el texto en minuscula para que no interfiera con la busqueda en el array de productos.
            let color = colorProducto.toLowerCase();
                console.log(color);
                if(color != "blanco" && color != "negro" && color != "gris" && color != "cafe" && color != "rojo" && color != "verde" && color != "rosado" && color != "azul") {
                    alert(`Ticket ${carrito.length + 1}\nIngrese algun color que tenemos en nuestro catalago`);
                    continue;
                };
                //Al ingresar un color correcto, se realizara una busqueda en la base de datos: "Productos" 
                let producto = productos.find(item => item.color === color);
                    console.log(producto)
                    console.log(producto.precio)
            //Ingresamos la talla del producto
            // let imagen = producto.imagen;
            let talla = parseInt(prompt(`Ticket ${carrito.length + 1}\nIngresa la talla de tu sneaker\n*No hay tallas medias*\n23\n24\n25\n26`));
                //If para filtrar tallas que tenemos
                if(talla >= 23 && talla <= 26) {
                    console.log(talla);
                }else{
                    alert("No contamos con esas tallas de calzado, vuelve a intentar... ");
                    talla= parseInt(prompt(`Ticket ${carrito.length + 1}\nIngresa la talla de tu sneaker\n*No hay tallas medias*\n23\n24\n25\n26`));
                };
            //Ingresamos la cantidad del producto
            let cantidad = parseInt(prompt(`Ticket ${carrito.length + 1}\nIngresa cuantos Sneakers de color ${color} vas a comprar`));
                //filtro para que el usuario ponga un numero
                while (cantidad === 0){
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

                //Escribir en los pedidos en la tabla
                document.getElementById(`imagen${carrito.length + 1}`).src=(`${producto.imagen}`);
                document.getElementById(`ticket${carrito.length + 1}`).textContent=(`${carrito.length + 1}`);
                document.getElementById(`cantidad${carrito.length + 1}`).textContent=(`${cantidad}`);
                document.getElementById(`color${carrito.length + 1}`).textContent=(`${color}`);
                document.getElementById(`talla${carrito.length + 1}`).textContent=(`${talla}`);
                document.getElementById(`total${carrito.length + 1}`).textContent=(`$${total}`);

            //> "push" para agregar ticket a la cola
            carrito.push(pedido);
            console.log(carrito);

            //Hacer la suma total del costo de todos los pedidos y mostrarlo
            const cantidadTotal = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
            document.getElementById("totalProductos").textContent=(cantidadTotal);
                    //Se muestra en la parte superior de carrito de compra
            document.getElementById("totalProductosCart").textContent=(cantidadTotal);

            //Hacer la suma total del costo de todos los pedidos y mostrarlo
            const acumuladoTotal = carrito.reduce((acumulador, item) => acumulador + item.total, 0);
            document.getElementById("totalPrecio").textContent=(`$${acumuladoTotal}`);
                    //Se muestra en la parte superior de carrito de compra
            document.getElementById("totalPrecioCart").textContent=(`$${acumuladoTotal}`);


        console.log(acumuladoTotal);

        }

        //Agregar otro ticket
        let otroPedido = confirm(`¿Desea realizar otro pedido?`)
        
        if(otroPedido == false){
            alert(`${carrito.length} Pedido creado`)
            return
        }else if(carrito.length == cantidad){
            alert(`Ya existen la cantidad maxima de pedidos`)
            return
        }

        
    }

    

}


//--------------> funcion en Boton para pagar y aplicar descuento por monto de compra
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
                alert("Realiza tu pedido en el botón iniciar ");
        }
    
}

// ----------> eliminar pedidos / No terminado
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    console.log(carrito);
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



// const cart = [];
// const productCart = [];

// //---> Agregar productos al carrito de compra
// function carritoDeCompras(event) {
//     // Añadimos el id a nuestra variable "carrito"
//     cart.push(event.target.getAttribute("id"));
//     console.log(cart);

//     //Hacer la suma total del costo de todos los pedidos y mostrarlo
//     const sumaProductos = cart.reduce((acumulador, item) => acumulador + item.length, 0);
//     document.getElementById("totalProductosCart").textContent=(sumaProductos);
//     console.log(sumaProductos);


//     crearCarrito()
// }

// //---- //---- Añadir productos a carrito de compra
// function crearCarrito(){
//     // Creamos un nuevo array para no repetir los objetos
//     const carritoDuplicados = [...new Set(cart)];
//     // Comprobamos que no este duplicado los items del nuevo array con los ID del array de productos
//     carritoDuplicados.forEach(function(item){
//         const miProducto = productos.filter(function(itemProductos){
//             return itemProductos.id === parseInt(item);
//         });

//     //log para revisar que se guarden los productos sin duplicar
//     console.log(carritoDuplicados);

//     // Numero de veces que se repiten los productos
//     const numeroDeProductos = cart.reduce(function(acumulador, itemId){
//         // ¿Coincide las id? Incremento el contador, en caso contrario lo mantengo (Aqui uso ?: para hacer valer las condiciones)
//         return itemId === item ? acumulador += 1: acumulador;}, 0);
//         //log para ver si cuentan los productos individualmente
//         console.log(numeroDeProductos);

//         console.log(carritoDuplicados.nombre);
    
    
//     //Creamos los productos en la pagina "Cart.html"
//     const nodo = document.createElement("li");
//     nodo.classList.add("list-group-item", "mb-5");
//     nodo.textContent = `${numeroDeProductos} - ${miProducto[0].nombre} - $${miProducto[0].precio}`;

//     const botonBorrar = document.createElement("button");
//     botonBorrar.classList.add("btn", "btn-danger");
//     botonBorrar.textContent= "Eliminar";
//     botonBorrar.dataset.item = item;
//     botonBorrar.addEventListener("click", borrarProductoCarrito);

//     nodo.appendChild(botonBorrar);
//     carritoDOM.appendChild(nodo);

//     });
    
// } 

// function borrarProductoCarrito(evento) {
//     const id = evento.target.dataset.item;
//     // Borramos todos los productos
//     carrito = cart.filter((cartId) => {
//         return cartId !== id;
//     });
//     // volvemos a renderizar
//     crearCarrito();
// }
