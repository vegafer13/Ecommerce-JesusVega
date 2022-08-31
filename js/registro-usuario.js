//Registro de newsletter
function registroUser() {
    let nombre = prompt("Ingresa tu nombre 😀");
    let correo = "";

    while (nombre != undefined) {
        if (typeof nombre === 'string' && nombre.length > 0) {
            alert("Ingresa un nombre correcto 📑");
            let nombre = prompt("Ingresa tu nombre 😀");
        }else{
            correo = prompt("Ingresa tu correo 📧");
            if (correo.length > 0) {
                alert(`Gracias ${nombre}, pronto te llegaran nuestras promociones 💌`);
                break;
            }else{
                alert("Pon un correo valido 📧");
            }
        }
        
    }

/*     if (typeof nombre === 'string' && nombre.length > 0){
        correo = prompt("Ingresa tu correo 📧");
        if (correo.length > 0) {
            alert(`Gracias ${nombre}, pronto te llegaran nuestras promociones 💌`);
        }else{
            alert("Pon un correo valido 📧");
        }
    }else{
        alert("Ingresa un nombre correcto 📑");
    } */
}


//Registro de newsletter
/* let nombre = prompt("Ingresa tu nombre 😀");
let correo = "";

if (typeof nombre === 'String' && nombre.length > 0){
    correo = prompt("Ingresa tu correo 📧");
    if (correo.length > 0) {
        alert(`Gracias ${nombre}, pronto te llegaran nuestras promociones 💌`);
    }else{
        alert("Pon un correo valido 📧");
    }
}else{
    alert("Ingresa un nombre correcto 📑");
} */

