//2. Crear la Clase Person con la siguiente estructura:

// • Atributos Públicos:
// - name: string
// - age: number

// • Atributos Privados:
// - address: string

// • Constructor para todos los atributos
class Person{ //He tenido que cambiar el "Person" por "Persona" porque me creaba conflicto con los ficheros de otras carpetas.
    public name: string;
    public age: number;
    private address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
//Metodos Públicos:
    printName(): string{
        return this.name;
    }
    yearOfBith(currentYear: number): number{
        return currentYear - this.age;
    }
    setAddress(address: string): string{
        return this.address = address;
        
    }
//- getAddress():string.
    getAddress(): string{
        return this.address;
    }
}
let persona1 = new Person("Edgar", 26, "Castellón");
//- printName(). Imprime por consola el nombre:
console.log(persona1.printName());
//- yearOfBirth(currentYear: number):number. Calcula y devuelve el año de nacimiento:
console.log(persona1.yearOfBith(2023));
//- setAddress(address:string). Modifica el atributo address con el valor pasado como
//parámetro.
console.log(persona1.setAddress("Reino de Valencia"));
//Devuelve el valor del atributo address:
console.log(persona1.getAddress());