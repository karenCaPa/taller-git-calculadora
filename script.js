console.log("Calculadora iniciada (estructura base)");
function obtenerNumeros() {
  const n1 = document.getElementById("numero1").value;
  const n2 = document.getElementById("numero2").value;

  if (n1 === "" || n2 === "") {
    alert("Por favor llena ambos números antes de calcular.");
    throw new Error("Campos vacíos");
  }

  return { n1: parseFloat(n1), n2: parseFloat(n2) };
}

function mostrarResultado(valor) {
  document.getElementById("resultado").textContent = valor;
}

function sumar() {
  try {
    const { n1, n2 } = obtenerNumeros();
    mostrarResultado(n1 + n2);
  } catch (error) {
    mostrarResultado("Error");
  }
}

function restar() {
  try {
    const { n1, n2 } = obtenerNumeros();
    mostrarResultado(n1 - n2);
  } catch (error) {
    mostrarResultado("Error");
  }
}
