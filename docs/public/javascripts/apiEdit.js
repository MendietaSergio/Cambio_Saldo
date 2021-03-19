window.addEventListener('DOMContentLoaded', () => {
    console.log("apiEdit vinculado");
    const $ = (element) => {
        return document.querySelector(element)
    }

    const origen = $('#origen');
    const destino = $('#destino');
    const formulario = $('form');
    const msgError = $('#msgError');
    const actualizar = $('#actualizar')
    const coeficiente = $('.coeficiente')
    const errorIgualdad = $('#errorIgualdad')

    const setUpdate = (coeficiente, origen, destino) => {
        if ($('.coeficiente').value > 0 && origen != destino) {
            fetch('http://localhost:3001/admin/api/edit', {
                method: 'POST',
                body: JSON.stringify({
                    coeficiente,
                    origen,
                    destino
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(response => response.json())
                .then(result => {

                })
        } else {
            console.log('no actualizado');
        }
    }
    origen.addEventListener('change', () => {
        igualdad(origen.value, destino.value);
        switch (true) {
            case origen.value == 0:
                errorOrigen.innerHTML = "Debes seleccionar el medio de pago.";
                origen.classList.add('errorSelector');
                blockAcutualizar();
                break;
            default:
                errorOrigen.innerHTML = " ";
                origen.classList.remove('errorSelector');
                origen.classList.add('validSelector');
                disblockActualizar();
                break;
        }
    })
    destino.addEventListener("change", () => {
        igualdad(origen.value, destino.value);
        switch (true) {
            case destino.value == 0:
                errorDestino.innerHTML = "Debes seleccionar el medio de pago.";
                destino.classList.add('errorSelector');
                blockAcutualizar();
                break;
            default:
                errorDestino.innerHTML = " ";
                destino.classList.remove('errorSelector');
                destino.classList.add('validSelector');
                disblockActualizar();
                break;
        }
    })

    coeficiente.addEventListener('keyup', function () {
        switch (true) {
            case this.value.length === 0:
                errorCoeficiente.innerHTML = "Debes ingresar un valor.";
                this.classList.add('errorCampo');
                blockAcutualizar();
                break;
            case this.value <= 0:
                errorCoeficiente.innerHTML = "Debes ingresar un valor positivo.";
                this.classList.add('errorCampo');
                blockAcutualizar();
                break;
            default:
                errorCoeficiente.innerHTML = " ";
                this.classList.remove('errorCampo');
                this.classList.add('validCampo');
                disblockActualizar();
                break;
        }
    })
    coeficiente.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorCoeficiente.innerHTML = "Debes ingresar un valor.";
                this.classList.add('errorCampo');
                blockAcutualizar();
                break;
            case this.value <= 0:
                errorCoeficiente.innerHTML = "Debes ingresar un valor positivo.";
                this.classList.add('errorCampo');
                blockAcutualizar();
                break;
            default:
                errorCoeficiente.innerHTML = " ";
                this.classList.remove('errorCampo');
                this.classList.add('validCampo');
                disblockActualizar();
                break;
        }
    })
    const igualdad = (origen, destino) => {
        if (origen == destino) {
            errorIgualdad.innerHTML = "Elija otro método de pago.";
            blockAcutualizar();
        } else {
            errorIgualdad.innerHTML = " "
            disblockActualizar();
        }
    }
    const blockAcutualizar = () => {
        actualizar.style.backgroundColor = "black";
        actualizar.style.color = "#4e4e4e";
        actualizar.type = "button"
    }
    const disblockActualizar = () => {
        actualizar.style.backgroundColor = "#157347";
        actualizar.style.color = "#fff";
    }
    actualizar.addEventListener('click', () => {
        let elementos = formulario.elements;
        console.log(origen.value);
        let error = false;
        if (origen.value == destino.value) {
            console.log(origen);
            console.log(destino.value);
            origen.classList.add('errorSelector');
            destino.classList.add('errorSelector');
            blockAcutualizar();
            error = true;
        }
        if (origen.value == 0) {
            origen.classList.add('errorSelector');
            blockAcutualizar();
            error = true;
        }
        if (destino.value == 0) {
            destino.classList.add('errorSelector');
            blockAcutualizar();
            error = true;
        }
        if (coeficiente.value == 0) {
            coeficiente.classList.add('errorCampo');
            blockAcutualizar();
            error = true;
        }
        if (!error) {
            msgError.innerHTML = " ";
            setUpdate(coeficiente.value, origen.value, destino.value);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Se actualizo con exito!',
                showConfirmButton: false,
                timer: 2000
            })
        } else {
            msgError.innerHTML = " Los campos señalados son obligatorios."
        }

    })
})