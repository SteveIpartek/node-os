const os = require('os');

function getOSInfo() {
  const nombre = os.hostname();
  const tipo = os.type();
  const version = os.version();
  const arquitectura = os.arch();
  const cpus = os.cpus().length;
  const memoriaTotalBytes = os.totalmem();
  const memoriaLibreBytes = os.freemem();

  // Convertir bytes a megabytes
  const bytesEnMB = 1024 * 1024;
  const memoriaTotalMB = (memoriaTotalBytes / bytesEnMB).toFixed(2);
  const memoriaLibreMB = (memoriaLibreBytes / bytesEnMB).toFixed(2);

  return {
    Nombre: nombre,
    Tipo: tipo,
    Versión: version,
    Arquitectura: arquitectura,
    CPUs: cpus,
    MemoriaTotal: `${memoriaTotalMB} MB`,
    MemoriaLibre: `${memoriaLibreMB} MB`,
  };
}

module.exports = getOSInfo();