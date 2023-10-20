import { Book } from "./book";
import { Library } from "./library";
// import { Library } from "./library";
let bookDescription1 = new Book("Introducción a JavaScript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let bookDescription2 = new Book("Harry Potter", 400, "1363345-DDC45432", "J. K. Rowling", "Planeta");
let bookDescription3 = new Book("El señor de los anillos", 900, "258498-DZD235638", "J. R. R. Tolkien", "Alianza");
console.log(bookDescription1.toString());
let biblioteca1 = new Library([], "Biblioteca Municipal de Castellón", "Ayuntamiento de Castellón");
