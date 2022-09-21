//Array vacio donde se envia las compras
const cart = [];

//Se crea una funcion para renderizar los productos seleccionados dentro del carrito de compra
const carritoIndex = (productoId) => {
    //se selecciona el id del contenedor donde se ingresaran los productos
    const contenedorCarrito = document.getElementById("cartShop")

    const renderProductosCart = () => {
        //Se realiza una busqueda del id del boton para que sea igual al id del array productos
        let producto = productos.find( producto => producto.id == productoId )
        //cuando se verifica que se encuentra el id, se agregara el producto por un push a cart
        cart.push(producto)
        
                //Mostramos la suma de la cantidad de productos que se agregaron al carrito
                const cantidadTotal = cart.reduce((acumulador, item) => {
                return acumulador = acumulador + item.cantidad;
                }, 0);
                //Valor que se muestra en la seccion de carrito de compra
                document.getElementById("totalProductos").textContent=(cantidadTotal);
                //Se muestra en la parte superior de carrito de compra
                document.getElementById("totalProductosCart").textContent=(cantidadTotal);
            
                //Mostramos la suma del valor de todos los productos que se agregaron al carrito
                const precioTotal = cart.reduce((acumulador, item) => {
                return acumulador = acumulador + item.precio;
                }, 0);
                //Valor que se muestra en la seccion de carrito de compra
                document.getElementById("totalPrecio").textContent=(`$${precioTotal}`);
                //Se muestra en la parte superior de carrito de compra
                document.getElementById("totalPrecioCart").textContent=(`$${precioTotal}`);
    

        console.log(cart);
        
        //Para q no se duplique los productos del carrito
        cart.some((item) => item.id === productoId)
        if (condition) {
            
        } else {
            
        }




        producto.cantidad = 1

        let valorProducto = producto.precio * producto.cantidad;

        //Creamos los productos en la seccion cart
        let listaProducto = document.createElement("tr")
        //html del producto que se agregara
        listaProducto.innerHTML = `<th scope="row">${cart.length}</th>
                                    <td class="w-25">
                                        <img class="img-fluid img-thumbnail" src="${producto.imagen}" alt="${producto.nombre}">
                                    </td>
                                    <td>${producto.cantidad}</td>
                                    <td>${producto.nombre}</td>
                                    <td>$${valorProducto}</td>
                                    <td><button class="btn btn-danger" id="eliminar${producto.id}">Eliminar</button></td>
                                    `
        
        contenedorCarrito.appendChild(listaProducto)

        //Agregamos localstorage
        localStorage.setItem("ProductosCarritos", JSON.stringify(producto));
        console.log(localStorage);

    }

    renderProductosCart()
    
}

// obtenerLocalStorage(cartLocalStorage)


// function obtenerLocalStorage() {

//     if (localStorage.getItem("ProductosCarritos")) {
//         //si existe un producto en el local storage
//         let producto = JSON.parse(localStorage.getItem("ProductosCarritos"));
//         console.log(producto);
//         cartLocalStorage.push(producto)
//         console.log(cartLocalStorage);

//          //Mostramos la suma de la cantidad de productos que se agregaron al carrito
//          const cantidadTotal = cartLocalStorage.reduce((acumulador, item) => {
//             return acumulador = acumulador + item.cantidad;
//             }, 0);
//             //Valor que se muestra en la seccion de carrito de compra
//             document.getElementById("totalProductos").textContent=(cantidadTotal);
//             //Se muestra en la parte superior de carrito de compra
//             document.getElementById("totalProductosCart").textContent=(cantidadTotal);
        
//             //Mostramos la suma del valor de todos los productos que se agregaron al carrito
//             const precioTotal = cartLocalStorage.reduce((acumulador, item) => {
//             return acumulador = acumulador + item.precio;
//             }, 0);
//             //Valor que se muestra en la seccion de carrito de compra
//             document.getElementById("totalPrecio").textContent=(`$${precioTotal}`);
//             //Se muestra en la parte superior de carrito de compra
//             document.getElementById("totalPrecioCart").textContent=(`$${precioTotal}`);

        
//         let listaProducto = document.createElement("tr")
//         //html del producto que se agregara
//         listaProducto.innerHTML = `<th scope="row">${cartLocalStorage.length}</th>
//                                     <td class="w-25">
//                                         <img class="img-fluid img-thumbnail" src="${cartLocalStorage.imagen}" alt="${cartLocalStorage.nombre}">
//                                     </td>
//                                     <td>${cartLocalStorage.cantidad}</td>
//                                     <td>${cartLocalStorage.nombre}</td>
//                                     <td>$${cartLocalStorage.precio}</td>
//                                     <td><button class="btn btn-danger" id="eliminar${cartLocalStorage.id}">Eliminar</button></td>
//                                     `
//     } else {
//         console.log("No hay productos guardados");
//     }

// }
