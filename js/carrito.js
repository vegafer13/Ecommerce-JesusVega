//Array vacio donde se envia las compras
let cart = [];
//Seccion donde esta el carrito
const itemCart = document.getElementById("cartShop");
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
    //Si se encuentra algo dentro de localStorage carrito, lo mandamos
    localStorage.getItem("carrito") ? cart = JSON.parse(localStorage.getItem("carrito")) : console.log();
        //Y renderizamos el carrito
        renderProductosCart();
})

//---------> Funcion para no repetir los productos agregados

const addCarrito = (productoId) => {
        //Se realiza una busqueda del id del boton para que sea igual al id del array productos
        const productoUnico = cart.some(item => item.id === productoId)
        //Para q no se duplique los productos del carrito
        if (productoUnico) {
            const cambiarCantidad = cart.map (item => {
                //Si el id se repite, se agrega 1+ a cantidad
                item.id === productoId && item.cantidad++;
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
    itemCart.innerHTML = "";

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
    itemCart.appendChild(listaProducto)

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

    totalPrecio.innerHTML = `$${total}`
    totalPrecioCart.innerHTML = `$${total}`

}

//----------> Boton Eliminar productos de carrito
const eliminarProducto = (productoId) => {
//Se realiza una busqueda del id dentro del array cart
const producto = cart.find((producto) => producto.id == productoId)
    //Alert
    Swal.fire({
        title: '¿Estas seguro?',
        text: `Se eliminara ${producto.nombre} del carrito`,
        imageUrl: `${producto.imagen}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: `${producto.nombre}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
            //Se encuentra el producto
            const find = cart.indexOf(producto);
            //Se elimina el producto seleccionado
            cart.splice(find, 1);
            console.log(find);
            //Si no hay productos dentro del carrito, se elimina todo
            cart.length == 0 && limpiarArray();
            //Se actualiza el carrito de compra
            renderProductosCart();
                //Alerta
                Swal.fire({
                    titleText: "Se elimino el producto",
                    icon: "success",
                })
        }
      })

      
   
}

//----------> Boton Vaciar Carrito
function vaciarCarrito() {
    Swal.fire({
        title: '¿Estas seguro?',
        text: "Se eliminaran todos los productos del carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
            limpiarArray()
                //Alerta
                Swal.fire({
                    titleText: "Se vacio tu carrito",
                    icon: "success",
                })
        }
      })
    
}

//---------->Funcion limpiar array
function limpiarArray() {
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
                     //Alerta
                    Swal.fire({
                        title: 'No se aplico descuento',
                        text: `El valor de tu compra no se aplico un descuento 😪`,
                        icon: "info",
                    })
            }else if (acumuladoTotal >= 500 && acumuladoTotal < 1500){
                descuento = 0.05;
                     //Alerta
                    Swal.fire({
                        title: 'Conseguiste un 5% de descuento',
                        text: `\nAhorraste $${acumuladoTotal * descuento} por tu compra🤑\n`,
                        icon: "info",
                    })
            }else if (acumuladoTotal >= 1500 && acumuladoTotal <5000){
                descuento = 0.10;
                     //Alerta
                    Swal.fire({
                        title: 'Conseguiste un 10% de descuento',
                        text: `\nAhorraste $${acumuladoTotal * descuento} por tu compra🤑\n`,
                        icon: "info",
                    })
            }else{
                descuento = 0.15;
                     //Alerta
                    Swal.fire({
                        title: 'Conseguiste un 15% de descuento',
                        text: `\nAhorraste $${acumuladoTotal * descuento} por tu compra🤑\n`,
                        icon: "info",
                    })
                // ventaText = `El valor de tu compra se aplico un 15% de descuento,\nAhorraste $${acumuladoTotal * descuento} por tu compra🤑\n`; 
            };

                //Se actualizan los precios del carrito de compra
                let montoTotal = (acumuladoTotal - (acumuladoTotal * descuento));
                totalPrecio.innerText = (`$${montoTotal}`);
                totalPrecioCart.innerText = (`$${montoTotal}`);
                // alert(`${ventaText}Total a pagar 🏷$${montoTotal}`);

        }else{
            alert("Agrega productos a tu carrito ");
        }
    
}