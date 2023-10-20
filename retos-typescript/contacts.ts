// RETO 3: Importa la clase "Person"
import { Person } from "./person";
//3. Crear la clase contacts con la siguiente estructura:
export class Contacts{
//Atributo Público:
//- people: array de objetos de la clase Person.
    public people: Person[];
//Constructor sin parámetros que inicialice el array people.
    constructor(){
        this.people = [];
    }
    addPerson(person: Person) {
        this.people.push(person);
    }
//Métodos Públicos:
//- printCalendar(). Imprime por consola los datos de todas las personas de la agenda.
    printCalendar(){
        for(let person of this.people){
            console.log("CONTACTO:");
            console.log(`Nombre: ${person.printName()}`);
            console.log(`Edad: ${person.age}`);
            console.log(`Dirección: ${person.getAddress()}`);
        }
    }
}
