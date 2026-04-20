import * as readline from "readline";

class Animal {
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  peso: number;
  dueno: string;
  estado: string;

  constructor(
    nombre: string,
    especie: string,
    raza: string,
    edad: number,
    peso: number,
    dueno: string
  ) {
    this.nombre = nombre;
    this.especie = especie;
    this.raza = raza;
    this.edad = edad;
    this.peso = peso;
    this.dueno = dueno;
    this.estado = "En revisión";
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nombre del animal: ", (nombre: string) => {
  rl.question("Especie (perro, gato, etc): ", (especie: string) => {
    rl.question("Raza: ", (raza: string) => {
      rl.question("Edad: ", (edad: string) => {
        rl.question("Peso (kg): ", (peso: string) => {
          rl.question("Nombre del dueño: ", (dueno: string) => {

            const animal: Animal = new Animal(
              nombre,
              especie,
              raza,
              Number(edad),
              Number(peso),
              dueno
            );

            console.log("\n🐾 Registro en Veterinaria:");
            console.log(animal);

            rl.close();
          });
        });
      });
    });
  });
});