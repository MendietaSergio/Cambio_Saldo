addEventListener('DOMContentLoaded', function () {
    console.log("Vinculado..!>");

    const formulario = document.querySelector('form');

    let inputEmail = formulario.elements[0];
    let inputPassword = formulario.elements[1]

    // EXPRESION REGULAR, CONDICION PARA VALIDAR EMAIL
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    inputEmail.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "Debe llenar este campo";
                this.classList.add("is-invalid");
                break;
            case !regExEmail.test(this.value):
                errorEmail.innerHTML = "El email debe ser valido.";
                this.classList.add('is-invalid');
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorEmail.innerHTML = "";
                break;
        }
    })
    inputPassword.addEventListener('blur', function(){
        switch (true) {
            case this.value.length === 0:
                errorPassword.innerHTML = "Debe llenar este campo.";
                this.classList.add('is-invalid');
                break;
            case this.value.length < 6:
                errorPassword.innerHTML = "Debe tener mínimo 6 carácteres.";
                this.classList.add('is-invalid');
            default:
                errorPassword.innerHTML = "";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPassword.innerHTML = "";
                break;
        }
    })
    formulario.addEventListener('submit',function(e){
        e.preventDefault;

        let elementos = formulario.elements;

        let error = false;
        for(let i=0; i<2; i++){
            if(elementos[i].value == 0){
                elementos[i].classList.add('is-invalid');
                error = true;
            }
        }
        
        if(!error){
            errorSubmit.innerHTML = "";
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '¡Gracias, pudiste logear!',
                showConfirmButton: false,
                timer: 2500
            }).then(() => {
                formulario.submit();
                })
        }else{
            errorSubmit.innerHTML = "Los campos señalados son obligatorios."
        }
    })

})