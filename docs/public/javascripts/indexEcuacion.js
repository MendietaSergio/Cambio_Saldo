// window.addEventListener("DOMContentLoaded", () => {

//     console.log('Vinculado indexEcuacion.js');
//     const $ = (element) => {
//         return document.querySelector(element);
//     }

    // const numEntrada = $('#numEntrada');
    // const numSalida = $('#numSalida');
    // const origen = $('#origen');
    // const destino = $('#destino');
    // const msgError = $('#msgError');
    // const optionSalida = $('.optionesSalida');
    // const selectOrigen = $('#selectEntrada');
    // const opcionesEntrada = $('#opcionesEntrada');
    // //const origen = $('#origen')

    // // console.log(optionOrigen);
    // selectOrigen.addEventListener('click',()=>{
    //     opcionesEntrada.addEventListener('click', ()=>{
    //         console.log(origen.value);
    //     })

    // })

    // const getValor = (numEntrada, origen, destino) => {

    //     if ($('#numEntrada').value > 0 && origen != destino) {
    //         fetch('http://localhost:3001/apis/valor', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 numEntrada,
    //                 origen,
    //                 destino
    //             }),
    //             headers: {
    //                 "Content-type": "application/json; charset=UTF-8",
    //             }
    //         })
    //             .then(response => response.json())
    //             .then(result => {

    //                 console.log("entra a entrada")
    //                 numSalida.value = result.numSalida
    //             })
    //     }
    // }
    // origen.addEventListener('change', () => {
    //     getValor(numEntrada.value, origen.value, destino.value)
    //     igualdad(origen.value, destino.value)

    // })
    // destino.addEventListener("change", () => {
    //     getValor(numEntrada.value, origen.value, destino.value)
    //     igualdad(origen.value, destino.value)
    // })
    // $('#numEntrada').addEventListener('input', () => {
    //     getValor(numEntrada.value, origen.value, destino.value)
    // })

    // const getValorSalida = (numSalida, origen, destino) => {

    //     if ($('#numSalida').value > 0 && origen != destino) {
    //         fetch('http://localhost:3001/apis/valores', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 numSalida,
    //                 origen,
    //                 destino
    //             }),
    //             headers: {
    //                 "Content-type": "application/json; charset=UTF-8",
    //             }
    //         })
    //             .then(response => response.json())
    //             .then(result => {
    //                 console.log("entra a salida")
    //                 numEntrada.value = result.numEntrada
    //             })
    //     }
    // }
    // origen.addEventListener('change', () => {
    //     getValorSalida(numSalida.value, origen.value, destino.value)
    //     igualdad(origen.value, destino.value)
    // })
    // destino.addEventListener("change", () => {
    //     getValorSalida(numSalida.value, origen.value, destino.value);
    //     igualdad(origen.value, destino.value);
    //     inputAdicional();

    // })
    // $('#numSalida').addEventListener('input', () => {
    //     getValorSalida(numSalida.value, origen.value, destino.value)
    // })
    // const igualdad = (origen, destino) => {
    //     if (origen == destino) {
    //         msgError.innerHTML = "Elija otro metodo."
    //         btn.style.backgroundColor = "black";
    //         btn.style.color = "#4e4e4e";
    //         btn.type = "button"
    //     } else {
    //         msgError.innerHTML = " "
    //         btn.style.backgroundColor = "#157347";
    //         btn.style.color = "#fff";
    //         btn.type = "submit"
    //     }
    // }

// });