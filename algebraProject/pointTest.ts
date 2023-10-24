// 6. En otro fichero denominado pointTest.ts importar la clase Point.
import { Point } from "./point";
// 7. Crear un nuevo objeto myPoint de la clase Point.
let punto1 = new Point(2, 4);
let anotherPoint = new Point(8, 9);
// Modificar el fichero pointTest.ts para probar los nuevos métodos.
console.log(punto1.distanceToOrigin());
console.log(punto1.calculateDistance(anotherPoint));
// Modificar el fichero pointTest.ts para probar este nuevo método (calculateQuadrant())
let punt0 = new Point(-1, 4)
console.log(punt0.calculateQuadrant());
//Modificar el fichero pointTest para probar este nuevo método:
//Punto actual:
let punto = new Point(0, 4);
//Objetos:
let obj1 = new Point(1, 5);
let obj2 = new Point(-1, -5);
let obj3 = new Point(3, -4);
//Array de objetos:
let arrObj: Point[] = [obj1, obj2, obj3];
let puntoMasCercano = punto.calculateNearest(arrObj);
console.log("El punto más cercano es: ", puntoMasCercano);