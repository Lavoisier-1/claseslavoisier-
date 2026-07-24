function calcularEstadistica() {

    let texto = document.getElementById("datos").value;

    let datos = texto
        .split(",")
        .map(numero => Number(numero.trim()))
        .filter(numero => !isNaN(numero));

    if (datos.length === 0) {
        document.getElementById("resultado").innerHTML =
        "<p>No ingresaste datos válidos.</p>";
        return;
    }

    let suma = 0;

    for (let numero of datos) {
        suma += numero;
    }

    let media = (suma / datos.length).toFixed(2);

    document.getElementById("resultado").innerHTML = `
        <h3>Resultados</h3>
        <p><strong>Datos:</strong> ${datos.join(", ")}</p>
        <p><strong>Cantidad:</strong> ${datos.length}</p>
        <p><strong>Suma:</strong> ${suma}</p>
        <p><strong>Media:</strong> ${media}</p>
    `;

}
