"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
// 2. Dicho fichero debe contener la clase Triangle con los siguientes atributos privados:
// • vertex1: Point
// • vertex2: Point
// • vertex3: Point
// Que corresponden a los vértices de un triángulo.
var Triangle = /** @class */ (function () {
    // 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    // 4. Programa el método calculateLengthSides() : number[] que debe devolver un array de tres posiciones,
    // cada una de las cuales debe ser la longitud de uno de los lados del triángulo.
    // NOTA: Para ello es importante usar el método calculateDistance de la clase Point.
    Triangle.prototype.calculateLengthSides = function () {
        var vertices = [];
        vertices.push(this.vertex1.calculateDistance(this.vertex2));
        vertices.push(this.vertex2.calculateDistance(this.vertex3));
        vertices.push(this.vertex3.calculateDistance(this.vertex1));
        return vertices;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
