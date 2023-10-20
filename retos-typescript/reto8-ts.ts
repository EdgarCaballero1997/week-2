// class Vector{
//     private elements: number[];
//     public n: number;
//     public k: number;
//     constructor(n: number, k: number){
//         this.n = n;
//         this.k = k;
//         this.elements = this.formacionElements(n, k);
//     }
//     formacionElements(n: number, k: number): number[]{
//         let result: number[] = []
//         for(let i = 0; i < n; i++){
//             result.push(Math.floor(Math.random() * k));
//         }
//         return result;
//     }
//     print(){
//         return this.elements;
//     }
//     add(v1: Vector){
//         let suma: number[] = [];
//         this.elements
//         for(let i = 0; i < this.elements.length; i++){
//             suma[i] = this.elements[i] + v1.elements[i];
//         }
//         return suma;
//     }
//     sub(v1: Vector){
//         let resta: number[] = [];
//         for(let i = 0; i < this.elements.length; i++){
//             resta[i] = this.elements[i] - v1.elements[i];
//         }
//         return resta;
//     }
//     mult(v1: Vector){
//         let producto: number[] = [];
//         for(let i = 0; i < this.elements.length; i++){
//             producto[i] = this.elements[i] * v1.elements[i];
//         }
//         return producto;
//     }
//     multNumber(n: number){
//         let resultado: number[] = [];
//         for(let i = 0; i < this.elements.length; i++){
//             resultado[i] = n * this.elements[i];
//         }
//         return resultado;
//     }
// }
// let resultado = new Vector(5, 5);
// let v1 = new Vector(5, 5);

// console.log(resultado.formacionElements(5, 5));
// console.log(resultado.print());
// console.log(resultado.add(v1));
// console.log(resultado.sub(v1));
// console.log(resultado.mult(v1));
// console.log(resultado.multNumber(2));