"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 5. En otro fichero denominado triangleTest.ts importar la clase Triangle.
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var point1 = new point_1.Point(1, 4);
var point2 = new point_1.Point(-2, -3);
var point3 = new point_1.Point(5, -7);
// 6. Crear un nuevo objeto myTriangle de la clase Triangle, en el fichero anterior, y probar todos sus
// métodos. Subir los cambios a GitHub. Haced merge con la rama main.
var myTriangle = new triangle_1.Triangle(point1, point2, point3);
// let longitudLado1 = myTriangle[0].calculateDistance(point2);
// let longitudLado2 = myTriangle[1].calculateDistance(point3);
// let longitudLado3 = myTriangle[2].calculateDistance(point1);
// let arrayLados = [longitudLado1, longitudLado2, longitudLado3];
console.log(myTriangle.calculateLengthSides(point1, point2, point3));
