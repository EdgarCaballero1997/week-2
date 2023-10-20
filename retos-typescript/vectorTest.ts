import { Vector } from "./vector";
let resultado = new Vector(5, 5);
let v1 = new Vector(5, 5);

console.log(resultado.formacionElements(5, 5));
console.log(resultado.print());
console.log(resultado.add(v1));
console.log(resultado.sub(v1));
console.log(resultado.mult(v1));
console.log(resultado.multNumber(2));