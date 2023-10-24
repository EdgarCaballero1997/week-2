// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.

// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
function everNumber(number: number){
    let listaNumeros: number[] = [];
    for(let i = 0; i < number; i += 3){
        listaNumeros.push(i);
    }
    return listaNumeros;
}
console.log(everNumber(100));
// Realizar una función que como parámetro de entrada reciba un array de strings y como
// salida devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
function myRevert(array: string[]){
    let nameList: string[] = [];
    for(let i = 4; i > -1; i--){
        nameList.push(array[i]);
    }
    return nameList;
}
let listName: string[] = ["Pepe", "Juan", "Marta", "Lorena", "Maria"];
console.log(myRevert(listName));
// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
function isRainbow(colors: string[]){
    let rainbowColors= ["Rojo", "Marrón", "Amarillo", "Beige", "Negro", "Azul", "Morado"];
    for(let i = 0; i < colors.length; i++){
        if(rainbowColors.indexOf(colors[i])!= -1){
            console.log(`${colors[i]} está en el arcoiris`);
        }else{
            console.log(`${colors[i]} no está en el arcoiris`);
        }
    }
}
let listaColores = ["Rosa", "Azul", "Amarillo"];
console.log(isRainbow(listaColores));
//Realizar una función que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array.
//La cabecera de la función tendrá el siguiente aspecto: function add(myWords).
function add(myWords: string[]) {
    let sumaCaracteres = 0;
  
    for (let i = 0; i < myWords.length; i++) {
      sumaCaracteres += myWords[i].length;
    }
  
    return sumaCaracteres;
  }
  let myWords = ["Papá", "Mamá", "Hermano", "Hermana", "Abuela"];
  console.log(add(myWords)); //¿Os podéis creer que me he tirado literalmente una hora para llegar a esta conclusión? Me siento un poco estupido xD