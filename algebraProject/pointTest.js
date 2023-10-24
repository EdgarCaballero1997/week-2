"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 6. En otro fichero denominado pointTest.ts importar la clase Point.
var point_1 = require("./point");
// 7. Crear un nuevo objeto myPoint de la clase Point.
var punto1 = new point_1.Point(2, 4);
var anotherPoint = new point_1.Point(8, 9);
// Modificar el fichero pointTest.ts para probar los nuevos métodos.
console.log(punto1.distanceToOrigin());
console.log(punto1.calculateDistance(anotherPoint));
// Modificar el fichero pointTest.ts para probar este nuevo método (calculateQuadrant())
var punt0 = new point_1.Point(-1, 4);
console.log(punt0.calculateQuadrant());
//Modificar el fichero pointTest para probar este nuevo método:
//Punto actual:
var punto = new point_1.Point(0, 4);
//Objetos:
var obj1 = new point_1.Point(1, 5);
var obj2 = new point_1.Point(-1, -5);
var obj3 = new point_1.Point(3, -4);
//Array de objetos:
var arrObj = [obj1, obj2, obj3];
var puntoMasCercano = punto.calculateNearest(arrObj);
console.log("El punto más cercano es: ", puntoMasCercano);
