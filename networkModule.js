const os = require('os');
const networkInterfaces = os.networkInterfaces();

function getNetworkInfo() {
  const interfacesInfo = {};
  for (const interfaz in networkInterfaces) {
    const direcciones = networkInterfaces[interfaz];
    const interfazInfo = [];
    direcciones.forEach(direccion => {
      interfazInfo.push({
        Familia: direccion.family,
        Dirección: direccion.address,
        Interno: direccion.internal,
      });
    });
    interfacesInfo[interfaz] = interfazInfo;
  }
  return interfacesInfo;
}

module.exports = getNetworkInfo();