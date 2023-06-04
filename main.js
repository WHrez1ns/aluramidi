function tocaSom(idTagAudio) {
    document.querySelector(idTagAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    let resto = listaDeTeclas[contador].classList[1];
    listaDeTeclas[contador].onclick = function () {
        tocaSom(`#som_${resto}`)
    };
    contador = contador + 1;
}

