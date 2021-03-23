//VALIDACIONES, ACTUALIZACION DE COEFICIENTE LISTOS!

window.addEventListener('DOMContentLoaded', () => {
    console.log("apiEdit vinculado");
    const $ = (element) => {
        return document.querySelector(element)
    }

    const origen = document.querySelector("#metodoOrigen");
    const destino = document.querySelector("#metodoDestino");
    const msgError = $('#msgError');
    const actualizar = $('#actualizar')
    const coeficiente = $('.coeficiente')
    const errorIgualdad = $('#errorIgualdad')
    const envia = $('#envia');
    const recibe = $('#recibe');

    /********************************************************************************************************/

    //LOGICA PARA MOSTRAR IMAGENES ENFORMA DE LISTA 'ENTRADA'
    const selectEntrada = document.querySelector('#selectEntrada');
    const opcionesEntrada = document.querySelector('#opcionesEntrada');
    const contenidoSelectEntrada = document.querySelector('#selectEntrada .contenido-select-Entrada');

    //HACER QUE CAMBIE DE VALOR AL INGRESAR EL INPUT
    document.querySelectorAll('#opcionesEntrada > .opcionEntrada').forEach((opcion) => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            contenidoSelectEntrada.innerHTML = e.currentTarget.innerHTML;
            envia.style.display = "none";
            selectEntrada.classList.toggle('active');
            opcionesEntrada.classList.toggle('active');
            origen.value = e.currentTarget.querySelector('#tituloOrigen').getAttribute('data-id');
            console.log(origen.value);
            igualdad(origen.value, destino.value, envia.textContent);
        });
    });

    selectEntrada.addEventListener('click', () => {
        selectEntrada.classList.toggle('active');
        opcionesEntrada.classList.toggle('active');

    });

    /********************************************************************************************************/

    //LOGICA PARA MOSTRAR IMAGENES EN FORMA DE LISTA 'SALIDA'
    const selectSalida = document.querySelector('#selectSalida');
    const opcionesSalida = document.querySelector('#opcionesSalida');
    const contenidoSelectSalida = document.querySelector('#selectSalida .contenido-select-Salida');

    document.querySelectorAll('#opcionesSalida > .opcionSalida').forEach((opcion) => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            contenidoSelectSalida.innerHTML = e.currentTarget.innerHTML;
            recibe.style.display = "none";
            selectSalida.classList.toggle('active');
            opcionesSalida.classList.toggle('active');
            destino.value = e.currentTarget.querySelector('#tituloDestino').getAttribute('data-id');
            igualdad(origen.value, destino.value, envia.textContent);
            recibe.textContent = " recibe";
        });
    });

    selectSalida.addEventListener('click', () => {
        selectSalida.classList.toggle('active');
        opcionesSalida.classList.toggle('active');
    });

    /********************************************************************************************************/

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
            selectSalida.style.borderColor = 'red';
            selectEntrada.style.borderColor = "red";
            blockAcutualizar();
        } else {
            errorIgualdad.innerHTML = " ";
            selectSalida.style.borderColor = 'green';
            selectEntrada.style.borderColor = "green";
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
    //BOTON DE ACTUALIZAR, CON VALIDACIONES SI ESTA TODO CORRECTO
    actualizar.addEventListener('click', () => {
        console.log(origen.value);
        let error = false;
        if (envia.textContent == "Envia") {
            selectEntrada.style.borderColor = "red";
            blockAcutualizar();
            error = true;
        }
        if (recibe.textContent == "Recibe") {
            selectSalida.style.borderColor = "red";
            blockAcutualizar();
            error = true;
        }
        if (origen == destino) {
            errorIgualdad.innerHTML = "Elija otro método de pago.";
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