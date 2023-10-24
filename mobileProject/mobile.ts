// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. 
export class Mobile{
//Dicho fichero debe contener la clase Mobile con los siguientes
//atributos privados:
// • name: string
// • trademark: string
// • model: string
// • color: string
// • price: number
    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;
// 2. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
    constructor(name: string, trademark: string, model: string, color: string, price: number){
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
// 3. Crear los métodos setters y getters para todos los atributos de la clase.
    getName(){
        return this.name;
    }
    getTrademark(){
        return this.trademark;
    }
    getModel(){
        return this.model;
    }
    getColor(){
        return this.color;
    }
    getPrice(){
        return this.price;
    }
    setName(name: string){
        this.name = name;
    }
    setTrademark(trademark: string){
        this.trademark = trademark;
    }
    setModel(model: string){
        this.model = model;
    }
    setColor(color: string){
        this.color = color;
    }
    setPrice(price: number){
        this.price = price;
    }
// 1. Crear un nuevo método que imprima por consola todas las características de la clase
// siguiendo el siguiente patrón:
// “The characteristics of the mobile name are:”
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price
    mobileCharacteristics(){
        return `
        The characteristics of the mobile name are:
        Name: ${this.name},
        Trademark: ${this.trademark},
        Model: ${this.model},
        Color: ${this.color},
        Price: ${this.price}.`
    }
}