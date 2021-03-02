
/*addEventListener('DOMContentLoaded',()=>{
    console.log("vinculado?");
    const formulario = document.querySelector('form');
    console.log("vinculado..");
    let inputNombre = formulario.elements[0];
    let inputEmail = formulario.elements[1];
    let inputNumero = formulario.elements[2];

    /* EXPRESION REGULAR, CONDICION PARA VALIDAR EMAIL
    let regExEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    inputNombre.addEventListener('blur',function(){
        switch(true){
            case this.value.length === 0:
                errorNombre.innerHTML = "Debe ingresar su nombre";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    })
    inputEmail.addEventListener('blur',function(){
        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "Debe ingresar su email.";
                this.classList.add('is-invalid');
                break;
            case !regExEmail.test(this.value):
                errorEmail.innerHTML = "El email debe ser valido.";
                this.classList.add('is-invalid');
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    })
    inputNumero.addEventListener('blur', function(){
        switch (true) {
            case this.value.length === 0:
                errorNumero.innerHTML = "Debe ingresar su número de telefono"
                this.classList.add('is-invalid');
                break;
            case this.value.length >8:
                errorNumero.innerHTML = "Debe ingresar 8 digitos";
                this.classList.add('is-invalid');
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    })
    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements;

        let error = false;
        for(let i=0; i<3; i++){
            if(elementos[i].value == 0){
                elementos[i].classList.add('is-invalid');
                error = true;
            }
        }
        if(elementos[0].value.length <4){
            error = true;
            errorNombre.innerHTML = "Tenes que llenar este campo.";
            this.classList.add('is-invalid');
        }
        if(elementos[1].value.length <1){
            error = true;
            errorNombre.innerHTML = "Tenes que llenar este campo.";
            this.classList.add('is-invalid');
        }
        if(elementos[3].value.length != 8){
            error = true;
            errorNombre.innerHTML = "Tenes que llenar este campo.";
            this.classList.add('is-invalid');
        }
        if(!error){
            errorSubmit.innerHTML =" ";
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu mensaje ha sido enviado.',
                showConfirmButton: false,
                timer: 2500
            }).then(() => {
                formulario.submit();
                })
        }else{
            errorSubmit.innerHTML = "Los campos señalados son obligatorios."
        }
    })

})*/