//Array vacio donde se envia las compras
let cart = [];
//Seccion donde esta el carrito
const contadorCart = document.getElementById("cartShop");
//Boton vaciar carrito
const emptyCart = document.getElementById("emptyCart");
//Const para modificar los valores del carrito de compra
const totalProductos = document.getElementById("totalProductos");
const totalPrecio = document.querySelector('.totalPrecio');
//Const para modificar los valores del carrito de compra superior izquierdo
const totalProductosCart = document.getElementById("totalProductosCart");
const totalPrecioCart = document.querySelector('.totalPrecioCart')






//-----------> Cargar carrito desde el localStorage
document.addEventListener("DOMContentLoaded", () =>{
    if(localStorage.getItem("carrito")){
        cart = JSON.parse(localStorage.getItem("carrito"));
        renderProductosCart();
    }
})

//---------> Funcion para no repetir los productos agregados
const addCarrito = (productoId) => {
        //Se realiza una busqueda del id del boton para que sea igual al id del array productos
        const productoUnico = cart.some(item => item.id === productoId)
        //Para q no se duplique los productos del carrito
        if (productoUnico) {
            const cambiarCantidad = cart.map (item => {
                if (item.id === productoId){
                    item.cantidad++;
                    // item.precio = item.precio * item.cantidad;
                }
            })
        } else {
            //cuando se verifica que se encuentra un nuevo id, se agregara el producto por un push a cart
            const producto = productos.find((producto) => producto.id == productoId)
            cart.push(producto);  
        }

        renderProductosCart()
}

//----------> Funcion para renderizar productos e imprimirlos en el carrito
const renderProductosCart = () => {
    //Se actualiza contenedor donde esta el carrito
    contadorCart.innerHTML = "";

    //se crea un forEach para que pase por todos los productos de array y los imprima en el carrito
    cart.forEach((producto) => {
        const listaProducto = document.createElement("tr");
        //html del producto que se agregara
        console.log(cart);
        let nuevoPrecio = producto.precio * producto.cantidad;
        listaProducto.innerHTML = `
                                    <td class="w-25">
                                        <img class="img-fluid img-thumbnail" src="${producto.imagen}" alt="${producto.nombre}">
                                    </td>
                                    <td>${producto.nombre}</td>
                                    <td>${producto.cantidad}</td>
                                    <td>$${nuevoPrecio}</td>
                                    <td><button class="btn btn-danger" id="eliminar${producto.id}">Eliminar</button></td>
                                    `
    contadorCart.appendChild(listaProducto)

        //Agregamos localstorage los productos que se mandaron a carrito
        localStorage.setItem("carrito", JSON.stringify(cart));
        console.log(localStorage);

        //Se crea el enlace del boton eliminar con la funcion eliminar producto
        const botonEliminar = document.getElementById(`eliminar${producto.id}`)
        botonEliminar.addEventListener('click', () => {
            eliminarProducto(producto.id)
        })

            
            //Se actualizan los textos del carrito de compra
            let actualizarCantidad = cart.reduce((acumulador, item) => acumulador + item.cantidad, 0);

            //Se actualiza los valores que se muestra en la seccion de carrito de compra
            totalProductos.innerText = actualizarCantidad;
            // totalPrecio.innerText = (`$${actualizarPrecio}`);

            //Se actualiza los valores que muestra en la parte superior de carrito de compra
            totalProductosCart.innerText = actualizarCantidad;
            // totalPrecioCart.innerText = (`$${actualizarPrecio}`);

            
    })

    calcularTotal()

}

//---------------> Calcular el valor total
function calcularTotal() {
    //Se crea una variable para contener los totales
    let total = 0;
    //se realiza una busqueda por el array cart
    cart.forEach((item) => {
        //se consigue el precio de cada item
        const precio = item.precio
        //se multiplica el precio por la cantidad de productos
        total = total + precio * item.cantidad
    })

    totalPrecio.innerHTML = `${total}`
    totalPrecioCart.innerHTML = `$${total}`

}

//----------> Boton Eliminar productos de carrito
const eliminarProducto = (productoId) => {
    //Se realiza una busqueda del id dentro del array cart
    const producto = cart.find((producto) => producto.id == productoId)
    //Se encuentra y elimina del carrito
    const find = cart.indexOf(producto);
    cart.splice(find, 1);
    console.log(find);
    if (cart.length === 0) {
        vaciarCarrito()
    }
    
    //Se actualiza el carrito de compra
    renderProductosCart();
}

//---------->Boton Vaciar Carrito
function vaciarCarrito() {
    //Se limpia el array del carrito
    cart = [];
    localStorage.clear();
    console.log(localStorage);

    //Se actualiza los valores para que no muestre nada en el contenedor de carrito
    totalProductos.innerText = "";

    //Se actualiza los valores para que no muestre nada en la parte superior
    totalProductosCart.innerText = "0";


    //Se actualiza el carrito de compra
    renderProductosCart();
}



//--------------> funcion en Boton para pagar y aplicar descuento por monto de compra
function pagarDescuento() {
    //Tomamos la misma funcion para calcularValor
    let acumuladoTotal = 0;
    cart.forEach((item) => {
        const precio = item.precio
        acumuladoTotal = acumuladoTotal + precio * item.cantidad
    })

    console.log(acumuladoTotal);

    //Aplicar descuento por cada cierto monto de compra
    // 0 - 500 = 0%
    // 500 - 1500 = 5%
    // 1500 - 5000 = 10%
    // 5000 > = 15%

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

                //Se actualizan los precios del carrito de compra
                let montoTotal = (acumuladoTotal - (acumuladoTotal * descuento));
                totalPrecio.innerText = (`$${montoTotal}`);
                totalPrecioCart.innerText = (`$${montoTotal}`);
                alert(`${ventaText}Total a pagar 🏷$${montoTotal}`);

            }else{
                alert("Agrega productos a tu carrito ");
        }
    
}