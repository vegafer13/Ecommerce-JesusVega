// Variables array
const nuevoRegistroUser = [];
const nuevoLoginUser = [];
const nuevoNewsletter = [];



const cardProductos = document.getElementById("productCard")
fetch("../productos.json")
.then(response => response.json())
.then(data => {
    data.forEach(producto => {
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
            addCarrito(producto.id)
            Swal.fire({
                titleText: `Se agrego ${producto.nombre} a tu carrito`,
                imageUrl: `${producto.imagen}`,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: `${producto.nombre}`,
                icon: "success",
                confirmButtonText: "Ok!",
            });
        });
        });
})


// // -------------> Funcion Registro Newsletter (Button Registrarse)
// function registroNewsletter() {
//     //>Constructor de correos
//     class UserNewsletter{
//         constructor( emailUser){
//           this.email = emailUser;
//         }
//     }
    
//     //>for para agregar correos registrados
//     for (let index = 0; index < 1; index++){
//         let emailUser = document.getElementById("emailNewsletter").value;
//              if (emailUser.length > 1) {
//                 console.log(emailUser);
//                 //> for para mandar alerta de registro
//                 alert(`Te registraste con el correo ${emailUser} 📧 \nPronto te llegaran nuestras promociones 🏷\n `);
//              }else{
//                 alert("Ingresa un correo")
//                 emailUser = document.getElementById("emailNewsletter").value;
//              }
//         let emailNew = new UserNewsletter(emailUser);

//         //> "push" para agregar correos a la cola
//         nuevoNewsletter.push(emailNew);

        
//     }

    
//     console.log(nuevoNewsletter);
    
// }

