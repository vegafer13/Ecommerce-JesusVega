//Registro de newsletter
let nombre = prompt("Ingresa tu nombre 😀");
let correo = "";

if (typeof nombre === 'string' && nombre.length > 0){
    correo = prompt("Ingresa tu correo 📧");
    if (correo.length > 0) {
        alert(`Gracias ${nombre}, pronto te llegaran nuestras promociones 💌`);
    }else{
        alert("Pon un correo valido 📧");
    }
}else{
    alert("Ingresa un nombre correcto 📑");
}








// if (nombre != "string" && nombre.length < 0){
//     alert("Agrega tu nombre 😁");
// }else if (correo === "") {
//     alert("Agrega un correo valido");
// }else{
//     alert(`Gracias ${nombre}, ahora te llegaran nuestras promociones a tu correo`)
// }


// while (pass != undefined) {
//     if (intentos > 0) {
//         if (pass === "1234") {
//             alert(`Bienvenido ${user}`);
//             break;

//         }else if(pass != "1234") {
//             pass = prompt(`Contraseña invalida, te quedan ${intentos} intentos`);
//             intentos--;
//             continue;
//         }
        
//     }else{
//         alert("Haz intentado varias veces, intentelo mas tarde");
//         break;
//     }
// }

