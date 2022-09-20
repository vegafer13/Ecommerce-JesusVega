//llamar para abrir el carrito de compra en la misma pantalla
const modalContenerdor = document.querySelector(".modal-container")
const abrirCarrito = document.getElementById("openCart")
const cerrarCarrito = document.getElementById("closeCart")
const modalCarrito = document.querySelector(".modal-carrito")

abrirCarrito.addEventListener('click', () => {
    modalContenerdor.classList.toggle("modal-active")
});

cerrarCarrito.addEventListener('click', () =>{
    modalContenerdor.classList.remove("modal-active")
})