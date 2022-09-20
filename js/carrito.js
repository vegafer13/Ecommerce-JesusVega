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

        console.log(cart);

        let carritoDuplicado = cart.find( elemento => elemento.id === producto.id)
        console.log(carritoDuplicado);

        if ( cart.find( elemento => elemento.id === producto.id)) {
            
        }else{

        }

        producto.cantidad = 1
            

        let valorProducto = producto.precio * producto.cantidad;

        //Creamos los productos en la seccion cart
        let listaProducto = document.createElement("tr")
        //html del producto que se agregara
        listaProducto.innerHTML = `<th scope="row">${carrito.length}</th>
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
        localStorage.setItem("producto", `${producto.nombre}`)
        console.log(localStorage);

    }

    
    renderProductosCart()
    
}





                // //Hacemos la suma de la cantidad de productos que se agregaron al carrito
                // const cantidadTotal = cart.reduce((acumulador, item) => {
                //     return acumulador = acumulador + item.cantidad;
                //     }, 0);
                //     //Valor que se muestra en la seccion de carrito de compra
                //     document.getElementById("totalProductos").textContent=(cantidadTotal);
                //     //Se muestra en la parte superior de carrito de compra
                //     document.getElementById("totalProductosCart").textContent=(cantidadTotal);
                
                //     //Hacemos la suma del valor de todos los productos que se agregaron al carrito
                //     const precioTotal = cart.reduce((acumulador, item) => {
                //     return acumulador = acumulador + item.precio;
                //     }, 0);
                //     //Valor que se muestra en la seccion de carrito de compra
                //     document.getElementById("totalPrecio").textContent=(`$${precioTotal}`);
                //     //Se muestra en la parte superior de carrito de compra
                //     document.getElementById("totalPrecioCart").textContent=(`$${precioTotal}`);
    