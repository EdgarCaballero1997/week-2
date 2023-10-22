"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:
// • x: number
// • y: number
var Point = /** @class */ (function () {
    // 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
    function Point(n, y) {
        this.n = n;
        this.y = y;
    }
    // 4. Crear los métodos setters y getters para todos los atributos de la clase.
    Point.prototype.getN = function () {
        return this.n;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setN = function (n) {
        this.n = n;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    // 5. Crear un método toString() que convierta a texto las coordenadas del punto.
    // Debe devolver: “(x,y)”
    Point.prototype.toString = function (x, y) {
        return "(".concat(x, ", ").concat(y, ")");
    };
    // Crear un método denominado distanceToOrigin():number que devuelva la distancia del
    // punto al origen de coordenadas (0,0).
    // NOTA: Buscar en Google la formula para calcular la distancia.
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt((Math.pow((this.n - 0), 2)) + (Math.pow((this.y - 0), 2)));
    };
    // Crear un método denominado calculateDistance(anotherPoint:Point):number, que
    // devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
    // instancia de Punto que se recibe como parámetro denominada anotherPoint.
    // NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.
    Point.prototype.calculateDistance = function (anotherPoint) {
        return Math.sqrt((Math.pow((this.n - anotherPoint.n), 2)) + (Math.pow((this.y - anotherPoint.y), 2)));
    };
    // Programa un método denominado calculateQuadrant():number que devuelva el
    // cuadrante en el que se encuentra el punto.
    Point.prototype.calculateQuadrant = function () {
        if (this.n === 0 || this.y === 0) {
            return 0;
        }
        else if (this.n > 0 && this.y > 0) {
            return 1;
        }
        else if (this.n < 0 && this.y > 0) {
            return 2;
        }
        else if (this.n < 0 && this.y < 0) {
            return 3;
        }
        else if (this.n > 0 && this.y < 0) {
            return 4;
        }
    };
    // Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
    // como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto
    // de dicho array que esté más cercano al punto actual.
    Point.prototype.calculateNearest = function (points) {
        var nearestPoint = points[0];
        var minDistance = this.calculateDistance(nearestPoint);
        for (var i = 1; i < points.length; i++) {
            var currentPoint = points[i];
            var currentDistance = this.calculateDistance(currentPoint);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                nearestPoint = currentPoint;
            }
        }
        return nearestPoint;
    };
    return Point;
}());
exports.Point = Point;
