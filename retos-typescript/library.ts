import { Book } from "./book";
export class Library{
    private books: Book[];
    private address: string;
    private manager: string;
    constructor(books: Book[], address: string, manager: string){
        this.books = books;
        this.books.push(bookDescription1, bookDescription2, bookDescription3);
        this.address = address;
        this.manager = manager;
    }
    getAddress(): string{
        return this.address;
    }
    getManager(): string{
        return this.manager;
    }
    getNumberOfBooks(): number{
        return this.books.length;
    }
    FindByAuthor(author: string): Book[]{
        let filtrado = this.books.filter((book) => book.getAuthor() == author);
        return filtrado;
    }
    setAddress(address: string): void{
        this.address = address;
    }
    setManager(manager: string): void{
        this.manager = manager;
    }
    toString(): string{
        return `
        Book1:
        ${bookDescription1}`
    }
}
let bookDescription1 = new Book("Introducción a JavaScript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let bookDescription2 = new Book("Harry Potter", 400, "1363345-DDC45432", "J. K. Rowling", "Planeta");
let bookDescription3 = new Book("El señor de los anillos", 900, "258498-DZD235638", "J. R. R. Tolkien", "Alianza");//Estas instanciaciones (de la clase Book)
//no me deja instanciarlas desde "bookTest.ts" para declaralas en este archivo (no sé si es algo normal, pero llevo toda la tarde probando cosas y no hay manera.
// let biblioteca1 = new Library([], "Biblioteca Municipal de Madrid", "Ayuntamiento de Madrid");
// console.log(biblioteca1.toString());