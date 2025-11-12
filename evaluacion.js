// ===============================
// PRIMERA EVALUACIÓN - FUNDAMENTOS DE PROGRAMACIÓN
// ===============================

// 1. Lotería
let num1 = parseInt(prompt("Ingresa el primer número (1-50):"));
let num2 = parseInt(prompt("Ingresa el segundo número (1-50):"));

for (let i = 1; i <= 50; i++) {
  if (i === num1 || i === num2) {
    console.log("¡Lotería!");
  } else {
    console.log(i);
  }
}

// 2. FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// 3. Invertir arreglo
let arreglo = [5, 1, 8, 6, 3];
let invertido = [];
for (let i = arreglo.length - 1; i >= 0; i--) {
  invertido.push(arreglo[i]);
}
console.log("Arreglo invertido:", invertido);

// 4. Número mayor
let arr = [4, 5, 1, 8, 3];
let mayor = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > mayor) mayor = arr[i];
}
console.log("El número mayor es:", mayor);

// 5. Números pares
let nums = [3, 4, 5, 12, 6, 1, 13];
let pares = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) pares.push(nums[i]);
}
console.log("Números pares:", pares);

// 6. Libros con lectura = true
const library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", readingStatus: false }
];

for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus) {
    console.log(`${library[i].title} de ${library[i].author}`);
  }
}

// 7. Rueda y grosor
let diametro = parseFloat(prompt("Ingrese el diámetro de la rueda:"));
let grosor = parseFloat(prompt("Ingrese el grosor de la rueda:"));

if (diametro > 1.4) console.log("La rueda es para un vehículo grande.");
else if (diametro > 0.8) console.log("La rueda es para un vehículo mediano.");
else console.log("La rueda es para un vehículo pequeño.");

if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25))
  console.log("El grosor para esta rueda es inferior al recomendado.");

// 8. Helado con topping
let topping = prompt("Elige un topping: oreo, kitkat o brownie");
let precio = 50;

if (topping === "oreo") precio += 10;
else if (topping === "kitkat") precio += 15;
else if (topping === "brownie") precio += 20;
else console.log("No tenemos este topping, lo sentimos.");

console.log("El precio final es:", precio, "MXN");

// 9. Programas educativos
let nivel = prompt("Elige el programa: course, carrera o master");
let beca = prompt("¿Tienes alguna beca? (facebook, google, jesua o ninguna)");
let precioMensual = 0, duracion = 0;

if (nivel === "course") { precioMensual = 4999; duracion = 2; }
else if (nivel === "carrera") { precioMensual = 3999; duracion = 6; }
else if (nivel === "master") { precioMensual = 2999; duracion = 12; }

if (beca === "facebook") precioMensual *= 0.8;
else if (beca === "google") precioMensual *= 0.85;
else if (beca === "jesua") precioMensual *= 0.5;

let total = precioMensual * duracion;
console.log(`Pago mensual: ${precioMensual} MXN`);
console.log(`Total por el curso: ${total} MXN`);

// 10. Costo por distancia y litros
let tipo = prompt("Tipo de vehículo (coche, moto o autobús):");
let kms = parseFloat(prompt("Kilómetros recorridos:"));
let litros = parseFloat(prompt("Litros consumidos:"));
let precioKm = 0;

if (tipo === "coche") precioKm = 0.20;
else if (tipo === "moto") precioKm = 0.10;
else if (tipo === "autobús") precioKm = 0.5;

let extra = litros <= 100 ? 5 : 10;
let totalPagar = (precioKm * kms) + extra;
console.log("Total a pagar:", totalPagar);
