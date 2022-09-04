//Suma de valores

function suma(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;   
}

/* 
let suma = function (numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;   
}
 */
console.log(suma(5,30));


//








// Gestion de Usuarios

window.onload = iniciar;

function iniciar(){
    let butoon = document.getElementById("butoon1");
    butoon.addEventListener("click", ingresoUsuarios)
    let butoon2 = document.getElementById("butoon2");
    butoon2.addEventListener("click", elimiarUsuarios)
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function clearcontent(id) {
    document.getElementById(id).innerHTML = "";
}

const usuarios = []

let cantidad = 3

function ingresoUsuarios(){
    class User{
        constructor(sexo,nombre,direccion,monto,financiado){
          this.sexo = sexo;
          this.nombre = nombre;
          this.direccion = direccion;
          this.monto = monto;
          this.financiado = financiado;
        }
        pagrarCuota(){
          this.financiado = this.financiado - 1;
        }
    };
    
    if(usuarios.length == cantidad){
            alert(`Ya existen la cantidad maxima de usuarios\nElimine un usuario para crear uno nuevo`)
            return}

    while(usuarios.length != cantidad){

        let varon = document.createElement('img')
        varon.src = 'assets/hombre.png'
        let mujer = document.createElement('img')
        mujer.src = 'assets/mujer.png'

        let genero = prompt(`Usuario ${usuarios.length + 1}\nIngrese Genero:\nM - Masculino\nF - Femenino`)

        while((genero.toLowerCase() != "m") && (genero.toLowerCase() != "f")){
            alert(`No se ingreso correctamente el Genero del Usuario`)
            genero = prompt(`Usuario ${usuarios.length + 1}\nIngrese Genero (M o F):\nM - Masculino\nF - Femenino`)
        }

        usuarios.push (new User(
            genero,
            prompt(`Usuario ${usuarios.length + 1} \nIngrese Nombre:`), 
            prompt(`Usuario ${usuarios.length + 1} \nIngrese Direccion:`), 
            parseInt(prompt(`Usuario ${usuarios.length + 1} \nIngrese Monto Limite:`)),
            parseInt(prompt(`Usuario ${usuarios.length + 1} \nIngrese Cuotas Limite:`))
        ));

        if(usuarios[usuarios.length - 1].sexo === "m" ){
            document.getElementById(`imagen${usuarios.length}`).appendChild(varon)
        }else{
            document.getElementById(`imagen${usuarios.length}`).appendChild(mujer)
        }

        document.getElementById(`nombre${usuarios.length}`).innerHTML = capitalize(usuarios[usuarios.length - 1].nombre)
        document.getElementById(`direccion${usuarios.length}`).innerHTML = capitalize(usuarios[usuarios.length - 1].direccion)
        document.getElementById(`monto${usuarios.length}`).innerHTML = `$${usuarios[usuarios.length - 1].monto}`
        document.getElementById(`financiado${usuarios.length}`).innerHTML = `Hasta: ${usuarios[usuarios.length - 1].financiado} Cuotas`

        let otro = confirm(`Desea Crear otro Usuario.?`)
        
        if(otro == false){
            alert(`${usuarios.length} Usiario Creado`)
            return
        }else if(usuarios.length == cantidad){
            alert(`Ya existen la cantidad maxima de usuarios\nElimine un usuario para crear uno nuevo`)
            return
        }


    }
}

function elimiarUsuarios(){

    let elimina = confirm(`Desea eliminar un usuario.?`)

    if(elimina == false){
        alert(`No se eliminó ningun usuario`)
        return
    }else if(usuarios.length == 0){
        alert(`No hay Usuarios Ingresados\nPara eliminar Usuarios primero ahi que crearlos`)
        return
    }else{

        let name = []
        let userName = ""

        for(const item of usuarios){
            name.push (item.nombre)
            userName += capitalize(item.nombre)+"\n"
        }

        let userDelet = prompt(`Ingrese el Nombre del Usuario a eliminar\n${userName}`)

        if(name.includes(userDelet.toLowerCase()) == false){
            alert(`El Nombre de Usuario ingresado no existe`)
        return
        }else{
            let confirmacion = confirm(`Confirma que desea ELIMINAR al Usuario "${capitalize(userDelet)}"`)

            if(confirmacion == false){
                alert(`No se eliminó ningun usuario`)
                return
            }else{
                let indice = name.indexOf(userDelet)
                usuarios.splice(indice,1)
            }

            console.log(usuarios);

            for(let i = 1; i <= 3; i++){
                clearcontent(`imagen${i}`)
                clearcontent(`nombre${i}`)
                clearcontent(`direccion${i}`)
                clearcontent(`monto${i}`)
                clearcontent(`financiado${i}`)
            }

            let varon = document.createElement('img')
            varon.src = 'assets/hombre.png'
            let mujer = document.createElement('img')
            mujer.src = 'assets/mujer.png'

            for(let g = 1 ; g <= usuarios.length; g++){
                if(usuarios[g - 1].sexo === "m"){
                    document.getElementById(`imagen${g}`).appendChild(varon)
                }else{
                    document.getElementById(`imagen${g}`).appendChild(mujer)
                }
                document.getElementById(`nombre${g}`).innerHTML = capitalize(usuarios[g - 1].nombre)
                document.getElementById(`direccion${g}`).innerHTML = capitalize(usuarios[g - 1].direccion)
                document.getElementById(`monto${g}`).innerHTML = `$${usuarios[g - 1].monto}`
                document.getElementById(`financiado${g}`).innerHTML = `Hasta: ${usuarios[g - 1].financiado} Cuotas`
            }
        }
    }
}