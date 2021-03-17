console.log("Vinculado");
window.addEventListener('DOMContentLoaded',()=>{
    console.log("vinculado?");
    const formulario = document.querySelector('#formulario');
    let inputNombre = formulario.elements[0];
    let inputEmail = formulario.elements[1];
    let inputNumero = formulario.elements[2];

    // EXPRESION REGULAR, CONDICION PARA VALIDAR EMAIL
    let regExEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regExNumero = /^[+]*[(]?[0-9]{1,4}[)]?[0-9-\s\.]+$/;
    inputNombre.addEventListener('blur',function(){
        switch(true){
            case this.value.length === 0:
                errorNombre.innerHTML = "Debe ingresar su nombre";
                this.classList.add('is-invalid');
                break;
            default:
                errorNombre.innerHTML =" ";
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
                break;
            default:
                errorEmail.innerHTML =" ";
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
            case !regExNumero.test(this.value):
                errorNumero.innerHTML = "Debe ingresar un numero válido.";
                this.classList.add('is-invalid');
                break;
            default:
                errorNumero.innerHTML =" ";
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
           
            this.classList.add('is-invalid');
        }
        if(elementos[1].value.length === 0){
            error = true;
            this.classList.add('is-invalid');
        }
        if(elementos[2].value.length === 0){
            error = true;
            this.classList.add('is-invalid');
        }
        if(!error){
            errorSubmit.innerHTML =" ";
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Tu mensaje ha sido enviado.',
                showConfirmButton: false,
                timer: 2500
            }).then(() => {
                formulario.submit();
                })
            .then(() => {
                return res.redirect('/pepe')
            })
            .catch(error => {
                res.send(error)
            })
        }else{
            errorSubmit.innerHTML = "Los campos señalados son obligatorios."
        }
    })

})