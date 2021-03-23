window.addEventListener('DOMContentLoaded', () => {
    //VARIABLES DE INPUT ENTRADA Y SALIDA.
    const origen = document.querySelector("#metodoOrigen");
    const destino = document.querySelector("#metodoDestino");
    const numEntrada = document.querySelector('#numEntrada');
    const numSalida = document.querySelector('#numSalida');

    //LOGICA PARA MOSTRAR IMAGENES ENFORMA DE LISTA 'ENTRADA'
    const selectEntrada = document.querySelector('#selectEntrada');
    const opcionesEntrada = document.querySelector('#opcionesEntrada');
    const contenidoSelectEntrada = document.querySelector('#selectEntrada .contenido-select-Entrada');
    
    //HACER QUE CAMBIE DE VALOR AL INGRESAR EL INPUT
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
            destino.value = e.currentTarget.querySelector('#tituloDestino').getAttribute('data-id');
            console.log(destino.value);
            igualdad(origen.value, destino.value);

        });
    });

    selectSalida.addEventListener('click', () => {
        selectSalida.classList.toggle('active');
        opcionesSalida.classList.toggle('active');
    });
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
                    numSalida.value = result.numSalida
                })
        }else{
            alert("error al cargar la API")
        }
    }
    numEntrada.addEventListener('input', () => {
        getValor(numEntrada.value, origen.value, destino.value);
    });
    //LOGICA PARA HACER LA ECUACION EN BASE AL INPUT SALIDA
    const getValorSalida = (numSalida, origen, destino) => {

        if ($('#numSalida').value > 0 && origen != destino) {
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
    const igualdad = (origen, destino) => {
        if (origen == destino) {
            msgError.innerHTML = "Elija otro metodo."
            // btn.style.backgroundColor = "black";
            // btn.style.color = "#4e4e4e";
            // btn.type = "button"
        } else {
            msgError.innerHTML = " "
            // btn.style.backgroundColor = "#157347";
            // btn.style.color = "#fff";
            // btn.type = "submit"
        }
    }
});