var _a;
import { series } from "./data.js";
const tablaSeries = (_a = document.getElementById("tablaSeries")) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("tbody")[0];
if (!tablaSeries) {
    console.error("No se encontró la tabla");
}
else {
    series.forEach((serie) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tablaSeries.appendChild(fila);
    });
}
const promedioElemento = document.getElementById("promedioTemporadas");
if (promedioElemento) {
    const promedio = series.reduce((acc, s) => acc + s.seasons, 0) / series.length;
    promedioElemento.textContent = `Promedio de temporadas: ${promedio.toFixed(2)}`;
}
