window.addEventListener('DOMContentLoaded', () => {
    let inputAdicional1 = document.querySelector('#campoAdicional1');
    //VARIABLES DE INPUT ENTRADA Y SALIDA.
    const origen = document.querySelector("#metodoOrigen");
    const destino = document.querySelector("#metodoDestino");
    const numEntrada = document.querySelector('#numEntrada');
    const numSalida = document.querySelector('#numSalida');

    //LOGICA PARA MOSTRAR IMAGENES ENFORMA DE LISTA 'ENTRADA'
    const selectEntrada = document.querySelector('#selectEntrada');
    const opcionesEntrada = document.querySelector('#opcionesEntrada');
    const contenidoSelectEntrada = document.querySelector('#selectEntrada .contenido-select-Entrada');
    
    //FUNCION PARA BLOQUEAR Y DESBLOQUEAR LA CAJA DE COMISIONES CUANDO ALGUN MEDIO DE PAGO SEA DE PAYPAL
    let caja_Comision = document.querySelector('.caja-comision');
    const cajaComisionOrigen =(origen)=>{
        console.log("cajaComision origen");
        if(origen.value != 13){
            caja_Comision.style.display ="none";
        }
        if(origen.value == 13){
            caja_Comision.style.display ="block"
        }
    }
    const cajaComisionDestino =(destino)=>{
        console.log("comision destino");
        if(destino.value !=13){
            caja_Comision.style.display = "none";
        }
        if(destino.value == 13){
            caja_Comision.style.display = "block";
        }
    }

    document.querySelectorAll('#opcionesEntrada > .opcionEntrada').forEach((opcion) => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            contenidoSelectEntrada.innerHTML = e.currentTarget.innerHTML;
            selectEntrada.classList.toggle('active');
            opcionesEntrada.classList.toggle('active');
            origen.value = e.currentTarget.querySelector('#tituloOrigen').getAttribute('data-id');
            console.log(origen.value);
            igualdad(origen.value, destino.value);
        });
        cajaComisionOrigen(origen);

    });

    selectEntrada.addEventListener('click', () => {
        selectEntrada.classList.toggle('active');
        opcionesEntrada.classList.toggle('active');
    });

    //LOGICA PARA MOSTRAR IMAGENES EN FORMA DE LISTA 'SALIDA'
    const selectSalida = document.querySelector('#selectSalida');
    const opcionesSalida = document.querySelector('#opcionesSalida');
    const contenidoSelectSalida = document.querySelector('#selectSalida .contenido-select-Salida');

    document.querySelectorAll('#opcionesSalida > .opcionSalida').forEach((opcion) => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            contenidoSelectSalida.innerHTML = e.currentTarget.innerHTML;
            selectSalida.classList.toggle('active');
            opcionesSalida.classList.toggle('active');
            cajaComisionDestino(destino);
            destino.value = e.currentTarget.querySelector('#tituloDestino').getAttribute('data-id');
            console.log(destino);
            let nombreCampo1 =`<%= pagos[${destino.value}].campoAdicional %>` ;
             //console.log(nombreCampo1)
            //inputAdicional1.placeholder = nombreCampo1//"<%= pagos["+destino.value+"].campoAdicional %>
            //inputAdicional1.setAttribute('placeholder', nombreCampo1)
            igualdad(origen.value, destino.value);

        });
    });
    

    selectSalida.addEventListener('click', () => {
        selectSalida.classList.toggle('active');
        opcionesSalida.classList.toggle('active');
    });
    let comisionTotal = document.querySelector('#comisionTotal')
    //LOGICA PARA HACER LA ECUACION EN BASE AL INPUT ENTRADA
    const getValor = (numEntrada, origen, destino) => {
        if (numEntrada > 0 && origen != destino) {
            fetch('http://localhost:3001/apis/valor', {
                method: 'POST',
                body: JSON.stringify({
                    numEntrada,
                    origen,
                    destino
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(response => response.json())
                .then(result => {
                    numSalida.value = result.numSalida;

                    valorSalida(numSalida.value)
                })
        }
    }
    const valorSalida =(numSalida) =>{
        comisionTotal.innerHTML = numSalida
        console.log(numSalida);
    }
    numEntrada.addEventListener('input', () => {
        getValor(numEntrada.value, origen.value, destino.value);
    });
    //LOGICA PARA HACER LA ECUACION EN BASE AL INPUT SALIDA
    const getValorSalida = (numSalida, origen, destino) => {

        if (numSalida> 0 && origen != destino) {
            fetch('http://localhost:3001/apis/valores', {
                method: 'POST',
                body: JSON.stringify({
                    numSalida,
                    origen,
                    destino
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(response => response.json())
                .then(result => {
                    console.log("entra a salida")
                    numEntrada.value = result.numEntrada
                })
        }
    }
    numSalida.addEventListener('input', () => {
        getValorSalida(numSalida.value, origen.value, destino.value);
    });
    const igualdad = (origen, destino) => {
        if (origen == destino) {//FALTA SACAR SUBMIT CUANDO SON DEL MISMO ID
            msgError.innerHTML = "Elija otro metodo."
            // btn.style.backgroundColor = "black";
            // btn.style.color = "#4e4e4e";
            // btn.type = "button"
        } else {
            msgError.innerHTML = " ";
            // btn.style.backgroundColor = "#157347";
            // btn.style.color = "#fff";
            // btn.type = "submit"
        }
    }
    /****************************************************************************************************************
     *                                       VALIDACIONES DEL FORMULARIO                                           *
    *****************************************************************************************************************/

    const formulario = document.querySelector('#formulario');
    let inputNombre = document.querySelector('#name');
    let inputEmail = document.querySelector('#email');
    let inputNumero = document.querySelector('#numero');
    //let inputAdicional1 = document.querySelector('#campoAdicional1');
    let inputAdicional2 = document.querySelector('#campoAdicional2');
    let inputAcept = document.querySelector('#accept');
    let btn = document.querySelector('#boton');

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
        console.log(inputAcept.checked);
        if (inputAcept.checked) {
            habilitarBtn()
        } else {
            blockAcutualizar();
        }

    })
    const habilitarBtn = () => {/*FALTA HACER FUNCIONAL LAS VALIDACIONES DEL FORMULARIO */
        let elementos = formulario.elements;

        let error = false;
        for (let i = 0; i < elementos.length; i++) {
            if (elementos[1].value == 0) {
                elementos[1].classList.add('is-invalid');
                error = true;
            }
            if(elementos[2].value ==0){
                elementos[2].classList.add('is-invalid');
                console.log(elementos[2].value);
                error = true;
            }
            if (!elementos[5].checked) {
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
        btn.style.backgroundColor = "rgb(65, 105, 255, .4)";
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
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Tu mensaje ha sido enviado.',
                showConfirmButton: false,
                timer: 2500
            }).then(() => {
                formulario.submit();
            })
                
                .catch(error => {
                    res.send(error)
                })
        } else {
            errorSubmit.innerHTML = "Los campos señalados son obligatorios."
        }
    })
});