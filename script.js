console.log("Calculadora iniciada (estructura base)");
function obtenerNumeros() {
    const n1 = document.getElementById("numero1").value;
    const n2 = document.getElementById("numero2").value;

    if (n1 === "" || n2 === "") {
        alert("Debes ingresar ambos números antes de calcular.");
        throw new Error("Campos vacíos");
    }

    return { n1: parseFloat(n1), n2: parseFloat(n2) };
}

function mostrarResultado(valor) {
    const resultadoSpan = document.getElementById("resultado");
    resultadoSpan.textContent = valor;
}

// Operación: Suma
function sumar() {
    try {
        const { n1, n2 } = obtenerNumeros();
        mostrarResultado(n1 + n2);
    } catch (error) {
        mostrarResultado("Error");
    }
}

// Operación: Resta
function restar() {
    try {
        const { n1, n2 } = obtenerNumeros();
        mostrarResultado(n1 - n2);
    } catch (error) {
        mostrarResultado("Error");
    }
}

// Operación: Multiplicación
function multiplicar() {
    try {
        const { n1, n2 } = obtenerNumeros();
        mostrarResultado(n1 * n2);
    } catch (error) {
        mostrarResultado("Error");
    }
}

// Operación: División
function dividir() {
    try {
        const { n1, n2 } = obtenerNumeros();

        if (n2 === 0) {
            alert("No es posible dividir por cero.");
            mostrarResultado("Infinito");
            return;
        }

        mostrarResultado(n1 / n2);
    } catch (error) {
        mostrarResultado("Error");
    }
}

function multiplicar() {
  try {
    const { n1, n2 } = obtenerNumeros();
    mostrarResultado(n1 * n2);
  } catch (error) {
    mostrarResultado("Error");
  }
}

function dividir() {
  try {
    const { n1, n2 } = obtenerNumeros();

    if (n2 === 0) {
      alert("No se puede dividir por cero.");
      mostrarResultado("Infinito");
      return;
    }

    mostrarResultado(n1 / n2);
  } catch (error) {
    mostrarResultado("Error");
  }
}
