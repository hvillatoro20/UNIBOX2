document.getElementById("afiliateForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener datos del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;

  // Generar código de cliente
  const codigoCliente = "UNIBOX-" + Math.floor(Math.random() * 1000000);

  // Mostrar código generado
  document.getElementById("codigoGenerado").innerText = ¡Gracias, ${nombre}! Tu código de cliente es: ${codigoCliente};

  // Enviar datos a Google Sheets (requiere configuración adicional)
  enviarDatosGoogleSheets(nombre, email, telefono, codigoCliente);
});

function enviarDatosGoogleSheets(nombre, email, telefono, codigoCliente) {
  const url = "https://script.google.com/macros/s/AKfycbwY9wI-eWhgxzHxpUowJ9Nk8UIMd_1C0Wq4qXsSfbfSkKdfyGmk6MeJ_q-XPlGrF3Qd/exec"; // Reemplaza con la URL de tu Google Apps Script
  const data = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    codigo: codigoCliente,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((result) => {
      console.log("Datos enviados a Google Sheets:", result);
    })
    .catch((error) => {
      console.error("Error al enviar datos:", error);
    });
}