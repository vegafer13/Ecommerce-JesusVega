//Login de usuario

let user = prompt("Introduzca tu usuario");
let pass = prompt("Introduzca tu contraseña, tienes 3 intentos");
let intentos = 2;

while (pass != undefined) {
    if (intentos > 0) {
        if (pass === "1234") {
            alert(`Bienvenido ${user}`);
            break;

        }else if(pass != "1234") {
            pass = prompt(`Contraseña invalida, te quedan ${intentos} intentos`);
            intentos--;
            continue;
        }
        
    }else{
        alert("Haz intentado varias veces, intentelo mas tarde");
        break;
    }
}