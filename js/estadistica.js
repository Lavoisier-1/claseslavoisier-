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

    document.getElementById("resultado").innerHTML =

    `
    <h3>Datos ingresados</h3>

    <p>${datos.join(", ")}</p>

    <p>Cantidad de datos: <strong>${datos.length}</strong></p>
    `;

}
