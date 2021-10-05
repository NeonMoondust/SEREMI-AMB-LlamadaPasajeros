var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

let primera_letra = "A", segunda_letra = "A", primer_numero = "000", segundo_numero = "000";
const boton = document.getElementById("boton-id");

const primer_letra_input = document.getElementById('ingreso-primera-letra');
const segunda_letra_input = document.getElementById('ingreso-segunda-letra');
const primer_numero_input = document.getElementById('ingreso-primer-numero');
const segundo_numero_input = document.getElementById('ingreso-segundo-numero');

let input = document.getElementsByName('input');

function cambioDeValores() {
    // primera_letra = primer_letra_input;
    // segunda_letra = "A";
    // primer_numero = primer_numero_input;
    // segundo_numero = "123";

    // document.getElementById('primera-letra').innerHTML = primera_letra;
    // document.getElementById('segunda-letra').innerHTML = segunda_letra;
    // document.getElementById('primer-numero').innerHTML = primer_numero;
    // document.getElementById('segundo-numero').innerHTML = segundo_numero;
    for (var i = 0 ; i < input.length; i++){
        var a = input[i];
        switch(i){
            case 0: document.getElementById('primera-letra').innerHTML = (a.value != "") ? (isNaN(a.value)) ? (a.value.length == 1) ? a.value : "A" : "A": "A";
            case 1: document.getElementById('primer-numero').innerHTML = (a.value != "") ? (isNaN(a.value)) ? "000" : (a.value.length == 1) ? "00" + a.value : (a.value.length == 2) ? "0" + a.value : a.value : "000";
            case 2: document.getElementById('segunda-letra').innerHTML = (a.value != "") ? (isNaN(a.value)) ? (a.value.length == 1) ? a.value : "A" : "A": "A";
            case 3: document.getElementById('segundo-numero').innerHTML = (a.value != "") ? (isNaN(a.value)) ? "000" : (a.value.length == 1) ? "00" + a.value : (a.value.length == 2) ? "0" + a.value : a.value : "000";
        }
    }
}

boton.onclick = cambioDeValores;


