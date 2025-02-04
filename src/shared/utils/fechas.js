const fechaActual = () => {
    return new Date().toLocaleString("es-HN", { timeZone: "America/Tegucigalpa", hour12: false })
    .replace(",", "");
}

module.exports = {
    fechaActual
    };