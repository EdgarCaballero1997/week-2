import { Mobile } from "./mobile";
export class MobileCollection{
    private mobile: Mobile[];
    private price: number;
    constructor(mobile: Mobile[]){
        this.mobile = mobile;
        this.price = this.totalPriceCalculation();
    }
    private totalPriceCalculation(){
        let total = 0;
        for(let mobile of this.mobile){
            total += mobile.getPrice();
        }
        return total;
    }
    printCollection(){
        let mobiles: Mobile[] = [];
        for(let mobile of this.mobile){
            mobiles.push(mobile);
        }
        return mobiles;
    }
    getMobile(){
        return this.mobile;
    }
    getPrice(){
        return this.price;
    }
    setMobile(mobile: Mobile[]){
        this.mobile = mobile;
        this.price = this.totalPriceCalculation();
    }
    setPrice(price: number){
        this.price = price;
    }
}
// Crear un nuevo método denominado printCollection que recorra todos los objetos del
// atributo mobile y los muestre por consola de la siguiente manera :

// This is all my mobiles:

// The characteristics of the mobile name are:
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price

// The characteristics of the mobile name are:
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price
// ......
// Price overall: totalPrice“