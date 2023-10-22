import { Point } from "./point";
// 2. Dicho fichero debe contener la clase Triangle con los siguientes atributos privados:
// • vertex1: Point
// • vertex2: Point
// • vertex3: Point
// Que corresponden a los vértices de un triángulo.
export class Triangle{
    vertex1: Point;
    vertex2: Point;
    vertex3: Point;
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
    constructor(vertex1: Point, vertex2: Point, vertex3: Point){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
// 4. Programa el método calculateLengthSides() : number[] que debe devolver un array de tres posiciones,
// cada una de las cuales debe ser la longitud de uno de los lados del triángulo.
// NOTA: Para ello es importante usar el método calculateDistance de la clase Point.
    calculateLengthSides(point1: Point, point2: Point, point3: Point): number[]{//Si no le metía parámetros no había manera de encontrar
//la forma de mandar la instanciación realizada en el archivo "triangleTest.ts", por lo menos no había una manera que yo conociera, por
//lo que después de estar 30-40 minutos buscando información en internet sin hayar respuesta decidí meterle 3 parámetros. Háganme saber
//si está mal. En cualquier caso, tengo un amigo que siempre me dice: si el código te arroja lo que esperabas que te arroje, no lo toques xD.
        let longitudLado1 = point1.calculateDistance(point2);
        let longitudLado2 = point2.calculateDistance(point3);
        let longitudLado3 = point3.calculateDistance(point1);
        let arrayLados = [longitudLado1, longitudLado2, longitudLado3];
        return arrayLados;
    }
}
