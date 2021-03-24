console.log("Vinculado");
window.addEventListener('DOMContentLoaded', () => {
    console.log("vinculado?");
    const formulario = document.querySelector('#formulario');
    let inputNombre = formulario.elements[0];
    let inputEmail = formulario.elements[1];
    let inputNumero = formulario.elements[2];
    let inputAdicional = formulario.elements[3];
    let inputAcept = formulario.elements[4];
    let btn = formulario.elements[5];
    console.log(formulario.elements[4]);
    const destino = document.querySelector('#destino');
    /*destino.addEventListener('change', () => {
        /*HACER QUE MUESTRE EL INPUT ADICIONAL EN BASE AL DESTINO SELECCIONADO.
        console.log(destino.opcion);
    })*/

    // EXPRESION REGULAR, CONDICION PARA VALIDAR EMAIL
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regExNumero = /^[+]*[(]?[0-9]{1,4}[)]?[0-9-\s\.]+$/;
    inputNombre.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "Debe ingresar su nombre";
                this.classList.add('is-invalid');
                blockAcutualizar();
                break;
            default:
                errorNombre.innerHTML = " ";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                habilitarBtn();

                break;
        }
    })
    inputEmail.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "Debe ingresar su email.";
                this.classList.add('is-invalid');
                blockAcutualizar();

                break;
            case !regExEmail.test(this.value):
                errorEmail.innerHTML = "El email debe ser valido.";
                this.classList.add('is-invalid');
                blockAcutualizar();

                break;
            default:
                errorEmail.innerHTML = " ";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                habilitarBtn();
                break;
        }
    })
    inputNumero.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorNumero.innerHTML = "Debe ingresar su número de telefono"
                this.classList.add('is-invalid');
                blockAcutualizar();

                break;
            case !regExNumero.test(this.value):
                errorNumero.innerHTML = "Debe ingresar un numero válido.";
                this.classList.add('is-invalid');
                blockAcutualizar();

                break;
            default:
                errorNumero.innerHTML = " ";
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                habilitarBtn();
                break;
        }
    })
    inputAcept.addEventListener('click', () => {
        console.log(inputAcept.value);
        let verificar = inputAcept.checked;
        console.log(verificar);
        if (verificar = true) {
            console.log("inputAcept.checked");
            //habilitarBtn()
            disblockActualizar()
        } else if(verificar = false) {
            blockAcutualizar();
            console.log("es off");
        }

    })
    const habilitarBtn = () => {/*FALTA HACER FUNCIONAL LAS VALIDACIONES DEL FORMULARIO */
        let elementos = formulario.elements;

        let error = false;
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[1].value == 0) {
                elementos[1].classList.add('is-invalid');
                console.log(elementos[i].value);
                console.log("entra elementos[1]");
                error = true;
            }
            if(elementos[2].value ==0){
                elementos[2].classList.add('is-invalid');
                console.log(elementos[2].value);
                console.log("entra elementos[2]");
                error = true;
            }
            if (elementos[4].value == "on") {
                console.log("entra on");
                error = true;
            }
        }
        if (!error) {
            disblockActualizar()
        }
    }
    //habilitarBtn();
    const blockAcutualizar = () => {
        btn.type = "button";
        btn.style.backgroundColor = "black";
        btn.style.color = "#4e4e4e";
    }
    const disblockActualizar = () => {
        btn.type = "submit";
        btn.style.backgroundColor = "royalblue";
        btn.style.color = "white";
        btn.style.borderColor = "rgb(73, 63, 211)";
    }

    
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        let elementos = formulario.elements;

        let error = false;
        for (let i = 0; i < 3; i++) {
            if (elementos[i].value == 0) {
                elementos[i].classList.add('is-invalid');
                error = true;
            }
        }
        if (elementos[0].value.length < 4) {
            error = true;

            this.classList.add('is-invalid');
        }
        if (elementos[1].value.length === 0) {
            error = true;
            this.classList.add('is-invalid');
        }
        if (elementos[2].value.length === 0) {
            error = true;
            this.classList.add('is-invalid');
        }
        if (!error) {
            errorSubmit.innerHTML = " ";
            /*Swal.fire({
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
                })*/
        } else {
            errorSubmit.innerHTML = "Los campos señalados son obligatorios."
        }
    })

})