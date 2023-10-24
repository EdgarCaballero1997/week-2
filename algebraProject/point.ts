// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:
// • x: number
// • y: number
export class Point{
    private n: number;
    private y: number;
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
    constructor(n: number, y: number){
        this.n = n;
        this.y = y;
    }
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
    getN(){
        return this.n;
    }
    getY(){
        return this.y;
    }
    setN(n: number){
        this.n = n;
    }
    setY(y: number){
        this.y = y;
    }
// 5. Crear un método toString() que convierta a texto las coordenadas del punto.
// Debe devolver: “(x,y)”
    toString(x: number, y: number){
        return `(${this.n}, ${this.y})`;
    }
// Crear un método denominado distanceToOrigin():number que devuelva la distancia del
// punto al origen de coordenadas (0,0).
// NOTA: Buscar en Google la formula para calcular la distancia.
    distanceToOrigin(){
        return Math.sqrt(((this.n - 0) ** 2) + ((this.y - 0) ** 2));
    }
// Crear un método denominado calculateDistance(anotherPoint:Point):number, que
// devuelva la distancia entre el punto representado por la instancia actual del objeto y otra
// instancia de Punto que se recibe como parámetro denominada anotherPoint.
// NOTA: Buscar en Google la formula para calcular la distancia entre dos puntos.
    calculateDistance(anotherPoint: Point){
        return Math.sqrt(((this.n - anotherPoint.n) ** 2) + ((this.y - anotherPoint.y) ** 2));
    }
// Programa un método denominado calculateQuadrant():number que devuelva el
// cuadrante en el que se encuentra el punto.
    calculateQuadrant(){
        let result: number = 0;
        if(this.getN() === 0 || this.getY() === 0){
            result = 0;
        }else if(this.getN() > 0 && this.getY() > 0){
            result = 1;
        }else if(this.getN() < 0 && this.getY() > 0){
            result = 2;
        }else if(this.getN()< 0 && this.getY() < 0){
            result = 3;
        }else if(this.getN() > 0 && this.getY() < 0){
            result = 4;
        }
        return result;
    }
// Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
// como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto
// de dicho array que esté más cercano al punto actual.
calculateNearest(points: Point[]){
    let nearestPoint = points[0];
    let minDistance = this.calculateDistance(nearestPoint);
    for(let i = 1; i < points.length; i++){
      let currentPoint = points[i];
      let currentDistance = this.calculateDistance(currentPoint);
    if(currentDistance < minDistance){
        minDistance = currentDistance;
        nearestPoint = currentPoint;
      }
    }
    return nearestPoint;
  }
//No me preguntéis cómo lo he hecho porque ya no me acuerdo. Dos horas dándole vueltas :'(
}