// Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
function hasEven(myNums: number[]){
    let i = 0;
    let numeosPares: number[] = [];
    while(i < myNums.length){
        if(myNums[i] % 2 == 0){
            numeosPares.push(myNums[i]);
        }
        i++
    }
    return numeosPares;
}
let arrayNums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(hasEven(arrayNums));
// Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
function startWithM(myNames: string[]){
    let i = 0;
    let nameListStartM: string[] = [];
    while(i < myNames.length){
        if(myNames[i][0] == "M"){
            nameListStartM.push(myNames[i]);
        }
        i++;
    }
    return nameListStartM;
}
let nameList: string[] = ["Pepe", "Maria", "Monica", "Juan", "Manuel", "Manuela"];
console.log(startWithM(nameList));