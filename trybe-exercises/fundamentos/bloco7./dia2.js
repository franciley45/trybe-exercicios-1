/* exercio 1 ploco7-dia2  */

const embranco = () => {
    const value1A = document.getElementById('value1').value;
    const value2B = document.getElementById('value2').value;
    if (value1A === "" || value2B === "") {
        throw new Error("preencha os dois campos pra operação funciona");
    } else if (isNaN(value1A) || isNaN(value2B)) {
        throw new Error("esses campos só podem ser preenchidos com numeros");
    }
}

function sum() {
    try {
        embranco()
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        const result = parseInt(value1) + parseInt(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result} `;
    } catch (error) {
        document.getElementById('result').innerHTML = `Erro: ${error.message}`;
    } finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }

}

window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}


/* mistura parametos com valores de uma outra função */


/* function baseMultiplica(valor1, valor2) {
    return valor1 * valor2
}

function recebeValores() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    document.getElementById('result').innerHTML = baseMultiplica(value1, value2)

}
window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', recebeValores);
} */