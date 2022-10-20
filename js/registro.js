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
            botoNewsletter.value = 'Send Email';
            Swal.fire({
                titleText: `Tu registro ha sido exitoso 📧 \nPronto te llegaran nuestras promociones 🏷\n`,
                icon: "success",
                confirmButtonText: "Ok!",
            });
        }, (err) => {
            botoNewsletter.value = 'Send Email';
            alert(JSON.stringify(err));
        });
    });}