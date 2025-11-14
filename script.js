console.log("Calculadora iniciada (estructura base)");
function obtenerNumeros() {
    const n1 = parseFloat(document.getElementById("numero1").value);
    const n2 = parseFloat(document.getElementById("numero2").value);
    return { n1, n2 };
}

function mostrarResultado(valor) {
    document.getElementById("resultado").textContent = valor;
}

function sumar() {
    const { n1, n2 } = obtenerNumeros();
    mostrarResultado(n1 + n2);
}

function restar() {
    const { n1, n2 } = obtenerNumeros();
    mostrarResultado(n1 - n2);
}
