const fs = require("fs");

function registrar(nombre, edad, animal, color, enfermedad) {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };
  
  citas.push(nuevaCita);
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
  console.log("Cita registrada exitosamente");
}

function leer() {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  
  if (citas.length === 0) {
    console.log("No hay citas registradas");
    return;
  }
  
  console.log("\n--- CITAS REGISTRADAS ---");
  citas.forEach((cita, index) => {
    console.log(`\n${index + 1}. Animal: ${cita.nombre}`);
    console.log(`   Edad: ${cita.edad}`);
    console.log(`   Tipo: ${cita.animal}`);
    console.log(`   Color: ${cita.color}`);
    console.log(`   Enfermedad: ${cita.enfermedad}`);
  });
  console.log("\n");
}

module.exports = { registrar, leer };