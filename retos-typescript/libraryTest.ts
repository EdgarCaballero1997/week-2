import { Library } from "./library";
let library1 = new Library([], "Biblioteca Municipal de Granada", "Ayuntamiento de Granada");
console.log(library1.getAddress());
console.log(library1.getManager());
console.log(library1.getNumberOfBooks());
console.log(library1.FindByAuthor("J. K. Rowling"));
console.log(library1.setAddress("República Independiente de mi Casa"));
console.log(library1.setManager("Cristo Rey")); //perdonadme los nombres pero si no me lo tomo a risa me tiro por la ventana.
//Los dos últimos console.log() printean "undefined". No sé porque, pero la verdad es que ahora mismo tampoco me importa mucho, solo quiero dormir :'(
