addEventListener('load', function () {
    console.log("Vinculado..!>");

    const formulario = document.querySelector('form');

    let inputEmail = formulario.elements[0];
    let inputPassword = formulario.elements[1]

    // EXPRESION REGULAR, CONDICION PARA VALIDAR EMAIL
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    inputEmail.addEventListener('keyup', function () {
        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "Debe llenar este campo";
                this.classList.add("is-invalid");
                break;
            case !regExEmail.test(this.value):
                errorEmail.innerHTML = "El email debe ser valido.";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorEmail.innerHTML = "";
                break;
        }
    })
    inputPassword.addEventListener('keyup', function(){
        switch (true) {
            case this.value.length === 0:
                errorPassword.innerHTML = "Debe llenar este campo.";
                this.classList.add('is-invalid');
                break;
            case this.value.length < 6:
                errorPassword.innerHTML = "Debe tener mínimo 6 carácteres.";
                this.classList.add('is-invalid');
                break;
            default:
                errorPassword.innerHTML = "";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPassword.innerHTML = "";
                break;
        }
    })
    formulario.addEventListener('submit',function(e){
        e.preventDefault();

        let elementos = formulario.elements;

        let error = false;
        for(let i=0; i<2; i++){
            if(elementos[i].value == 0){
                console.log(elementos[i]);
                elementos[i].classList.add('is-invalid');
                error = true;
            }
        }
        if(elementos[0].value.length===0){
            error = true
            errorEmail.innerHTML = "Debes ingresar su email.";
            this.classList.add('is-invalid');
        }
        if(elementos[1].value.length===0){
            error = true;
            errorPassword.innerHTML = "Debes ingresa su password.";
            this.classList.add('is-invalid');
        }
        
        if(!error){
            errorSubmit.innerHTML = "";
            formulario.submit();
            
        }else{
            errorSubmit.innerHTML = "Los campos señalados son obligatorios."
        }
    })

})