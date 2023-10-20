// RETO 4: Crear la Clase Book con la siguiente estructura:
class Book{
//• Atributos Privados:
//- title: string
//- nPages: number
//- isbn: string
//- author: string
//- editorial: string
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;
//• Constructor para todos los atributos.
    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
//• Metodos Públicos:
//- getters y setters para todos los atributos
//- toString (): string.
    getTitle(): string{
        return this.title;
    }
    getNumPages(): number{
        return this.nPages;
    }
    getISBN(): string{
        return this.isbn;
    }
    getAuthor(): string{
        return this.author;
    }
    getEditorial(): string{
        return this.editorial;
    }
    setTitle(title: string): void{
        this.title = title;
    }
    setNumPages(nPages: number): void{
        this.nPages = nPages;
    }
    setISBN(isbn: string): void{
        this.isbn = isbn;
    }
    setAuthor(author: string): void{
        this.author = author;
    }
    setEditorial(editorial: string): void{
        this.editorial = editorial;
    }
// Devuelve un string con TODA la información del libro con la siguiente estructura:
// “Title – Introducción a Javascript
// Numer of Pages - 233
// ISBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions"
    toString(): string{
        //Si alineo los atributos uno justo encima del otro, por consola me lo muestra desalineado.
        //De esta forma en consola me muestra la "book1" alineado y en bloque.
        return `LIBRO: 
        Title - ${this.title}
        Number of page - ${this.nPages}
        ISBN - ${this.isbn}
        Author - ${this.author}
        Editorial - ${this.editorial}`
    }
}
let book_1 = new Book("El señor de los anillos", 900, "2344433-BC23333", "R. R. Tolkien", "Planeta");
let book_2 = new Book("Harry Potter", 400, "126589-BBDC23", "J. K. Rowling", "Alianza");
let book_3 = new Book("El principe de la niebla", 250, "325411-CBB343", "Vanesa Cooper", "Planeta");
console.log(book_1.toString());
console.log(book_2.toString());
console.log(book_3.toString());
console.log(book_1.getTitle());
console.log(book_2.getTitle());
console.log(book_3.getTitle());

