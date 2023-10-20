import { Person } from "./person";

let persona1 = new Person("Edgar", 26, "Castellón");
let persona2 = new Person("Ángela", 22, "Asturias");
// console.log(persona1);
// console.log(persona2);
console.log(persona1.printName());
console.log(persona1.yearOfBith(2023));
console.log(persona1.setAddress("Reino de Valencia"));
console.log(persona2.printName());
console.log(persona2.yearOfBith(2023));
console.log(persona2.setAddress("Reino de Castilla"));