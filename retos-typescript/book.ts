export class Book{
        private title: string;
        private nPages: number;
        private isbn: string;
        private author: string;
        private editorial: string;
        constructor(title: string, nPages: number, isbn: string, author: string, editorial: string){
            this.title = title;
            this.nPages = nPages;
            this.isbn = isbn;
            this.author = author;
            this.editorial = editorial;
        }
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
        toString(): string{
            return `
            Title - ${this.title}
            Number of page - ${this.nPages}
            ISBN - ${this.isbn}
            Author - ${this.author}
            Editorial - ${this.editorial}`
        }
}

