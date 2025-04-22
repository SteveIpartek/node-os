// Importar el módulo osModule
const osInfo = require('./osModule');

// Importar el módulo networkModule
const networkInfo = require('./networkModule');

console.log('--- Información del Sistema ---');
for (const key in osInfo) {
  console.log(`${key}: ${osInfo[key]}`);
}

console.log('\n--- Información de Red ---');
for (const interfaz in networkInfo) {
  let outputInterfaz = `Interfaz ${interfaz}:`;
  networkInfo[interfaz].forEach(direccion => {
    outputInterfaz += ` Familia: ${direccion.Familia} Dirección: ${direccion.Dirección} Interno: ${direccion.Interno}`;
  });
  console.log(outputInterfaz);
}