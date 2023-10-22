// 5. En otro fichero denominado triangleTest.ts importar la clase Triangle.
import { Triangle } from "./triangle";
import { Point } from "./point";

let point1 = new Point(1, 4);
let point2 = new Point(-2, -3);
let point3 = new Point(5, -7);
// 6. Crear un nuevo objeto myTriangle de la clase Triangle, en el fichero anterior, y probar todos sus
// métodos. Subir los cambios a GitHub. Haced merge con la rama main.
let myTriangle = new Triangle(point1, point2, point3);
console.log(myTriangle.calculateLengthSides(point1, point2, point3));
