// -------------> Funcion Registro Newsletter (Button Registrarse)
function registroNewsletter(){ 
    //--> Boton para realizar el registro
    const botoNewsletter = document.getElementById('btnSendEmail');
    document.getElementById('formEmail')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        
        botoNewsletter.value = 'Enviando...';
        

        const serviceID = 'default_service';
        const templateID = 'template_ecwtcws';
        

        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            botoNewsletter.value = 'Correo Registrado';
            Swal.fire({
                titleText: `Tu registro ha sido exitoso 📧 \nPronto te llegaran nuestras promociones 🏷\n`,
                icon: "success",
                confirmButtonText: "Ok!",
            });
        }, (err) => {
            botoNewsletter.value = 'Error al registrarse';
            alert(JSON.stringify(err));
        });
});
}

// -------------> Funcion Formulario de contacto (Button Contacto)
function formContact() {
    const btn = document.getElementById('button');

    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_00zrtx4';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Mensaje enviado';
            Swal.fire({
                titleText: `Se envio correctamente tu solicitud 📧 \nUno de nuestros asesores se pondra en contacto...\n`,
                icon: "success",
                confirmButtonText: "Ok!",
            });
        }, (err) => {
            btn.value = 'Error al enviar mensaje...';
            alert(JSON.stringify(err));
        });
    });
}