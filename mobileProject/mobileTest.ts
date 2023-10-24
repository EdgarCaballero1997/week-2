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
myMobile.setName("Olga");
console.log(myMobile.getName());
myMobile.setTrademark("LG");
console.log(myMobile.getTrademark());
myMobile.setModel("Plus");
console.log(myMobile.getModel());
myMobile.setColor("Blue");
console.log(myMobile.getColor());
myMobile.setPrice(800);
console.log(myMobile.getPrice());
// 2. Crear tres objetos de la clase Mobile en el fichero mobileTest.ts.
let myMobile1 = new Mobile("Xiaomi", "Xiaomi INC", "Redmi Note", "Black", 500);
let myMobile2 = new Mobile("iPhone", "Apple", "14 Pro Max", "Amarillo", 1500);
let myMobile3 = new Mobile("Samsung", "Samsung INC", "Galaxy", "Green", 650);
// 3. Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres
// objetos creados en el punto 2.
let myMobiles: Mobile[] = [myMobile1, myMobile2, myMobile3];
//En caso de conocer el números de elementos que posee el array, podemos invocarlos uno a uno como hago a continuación.
//Creo que la buena práxis anima a usar el método anterior del bucle for().
console.log(myMobile1.mobileCharacteristics());
console.log(myMobile2.mobileCharacteristics());
console.log(myMobile3.mobileCharacteristics());
// 5. Subir los cambios a GitHub. Y hacer merge con la rama principal.




//NOTA PARA EL PROFESOR: ES LA ÚNICA FORMA QUE ENCUENTRO DE RESOLVER EL RETO. OS PEDIRÍA QUE SI NO ESTÁIS DE ACUERDO
//INTENTÉIS RESOLVERLO VOSOTROS, PORQUE YO HE INTENTADO POR TODAS LAS FORMAS POSIBLES, INCLUDA CHATGTP Y ES
//IMPOSIBLE RESOLVER EL RETO TAL Y CÓMO LO PIDE EL EJERCICIO SIN DEFINIR UN BUCLE EN EL ARCHIVO "mobileTest.ts". DESPUÉS DE
//MÁS DE 2 HORAS ME DOY POR RENDIDO.