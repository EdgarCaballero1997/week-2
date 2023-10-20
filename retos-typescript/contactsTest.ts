import {Contacts} from "./contacts"
import {Person} from "./person";

let contacto1 = new Person("Lope", 20, "La Rioja");
let contacto2 = new Person("Pepe", 18, "Murcia");
let contacto3 = new Person("Marta", 25, "Madrid");

let contact1 = new Contacts();
let contact2 = new Contacts();
let contact3 = new Contacts();

contact1.addPerson(contacto1);
contact2.addPerson(contacto2);
contact3.addPerson(contacto3);

contact1.printCalendar();
contact2.printCalendar();
contact3.printCalendar();