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
let rojo = "Rojo";
let naranja = "Naranja";
let amarillo = "Amarillo";
let verde = "Verde";
let cian = "Cian";
let azul = "Azul";
let morado = "Morado";
let rainbowColors = [rojo, naranja, amarillo, verde, cian, azul, morado];
function isRainbow(colors: string[]){
    let result: string[] = [];
    for(let i = 0; i < rainbowColors.length; i++){
        if(colors[i] == rainbowColors[i]){//No puedo usar el método .includes() en esta versión de TypeScript, la he intenado actualizar
//desde el archivo tsconfig.json añadiendo "es2016" en la libreria de TypeScript, pero no da resultado, por lo que la única forma que he
//encontrado de construir la función es comparando las posiciones de los arrays (lo mismo que hace el método .indexOf()). Esto quiere decir
//que si pasas por parámetro un orden de colores distinto al orden de colores del array "rainbowColors" te dará false continuamente.            
            result.push("¿El color '" + colors[i] + "' se encuentra en el arcoiris? --> " + true);
            
        }else{
            result.push("¿El color '" + colors[i] + "' se encuentra en el arcoiris? --> " + false);
            
        }
    }
    return result;
}
let listaColores = ["Rojo", "Marrón", "Amarillo", "Beige", "Negro", "Azul", "Morado"];//Si os fijáis, los colores que SÍ coinciden con el
//arcoiris están en el mismo índice que los colores del array "rainbowColor". No he encontrado otra manera de hacerlo sin usar el método .includes().
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