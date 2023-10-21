// 4. En otro fichero denominado mobileTest.ts importar la clase Mobile.
import { Mobile } from "./mobile";
// 5. Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar
// todos sus métodos.
let myMobile = new Mobile("Realme", "Realme INC", "7i", "Cian", 270);
console.log(myMobile.getName());
console.log(myMobile.getTrademark());
console.log(myMobile.getModel());
console.log(myMobile.getColor());
console.log(myMobile.getPrice());
console.log(myMobile.setName("Olga"));
console.log(myMobile.setTrademark("LG"));
console.log(myMobile.setModel("Plus"));
console.log(myMobile.setColor("Blue"));
console.log(myMobile.setPrice(800));
// 2. Crear tres objetos de la clase Mobile en el fichero mobileTest.ts.
let myMobile1 = new Mobile("Xiaomi", "Xiaomi INC", "Redmi Note", "Black", 500);
let myMobile2 = new Mobile("iPhone", "Apple", "14 Pro Max", "Amarillo", 1500);
let myMobile3 = new Mobile("Samsung", "Samsung INC", "Galaxy", "Green", 650);
// 3. Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres
// objetos creados en el punto 2.
let myMobiles: Mobile[] = [myMobile1, myMobile2, myMobile3];
// 4. Mostrar los datos de myMobiles invocando al método del punto 1.
//Suponiendo que NO conocemos el número de elementos que existen en el array, podríamos hacer un bucle for() que recorra
//todos sus elementos con el método ".length"
for(let i = 0; i < myMobiles.length; i++){
    console.log(myMobiles[i].mobileCharacteristics());
    
}
//En caso de conocer el números de elementos que posee el array, podemos invocarlos uno a uno como hago a continuación.
//Creo que la buena práxis anima a usar el método anterior del bucle for().
console.log(myMobiles[0].mobileCharacteristics());
console.log(myMobiles[1].mobileCharacteristics());
console.log(myMobiles[2].mobileCharacteristics());
// 5. Subir los cambios a GitHub. Y hacer merge con la rama principal.